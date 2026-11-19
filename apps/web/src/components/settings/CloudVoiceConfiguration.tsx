import { translateWebSource } from "~/i18n/messages";
import { useI18n } from "~/i18n/WebI18nContext";
import { useAtomRefresh, useAtomValue } from "@effect/atom-react";
import { cloudSpeechDisclosure } from "@t3tools/shared/speech";
import type { PreparedConnection } from "@t3tools/client-runtime/connection";
import {
  configuredSecretSources,
  secretRequestReference,
} from "@t3tools/client-runtime/secret-request";
import {
  getCloudSpeechKeys,
  getCloudSpeechModels,
  setCloudSpeechKey,
} from "@t3tools/client-runtime/voice-input";
import {
  AuthOrchestrationOperateScope,
  AuthSettingsWriteScope,
  CloudSpeechApiKey,
  CloudSpeechModelId,
  CLOUD_SPEECH_LABELS,
  CLOUD_SPEECH_PROVIDER_NAMES,
  isSecretReference,
  type CloudSpeechModel,
  type CloudSpeechProvider,
  type SecretProviderId,
  type SettingsSecretValue,
  type VoiceTranscriptionDestination,
} from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import type { HttpClient } from "effect/http";
import { Atom, AsyncResult } from "effect/reactivity";
import { useId, useState } from "react";
import { isSecretsFeatureEnabled } from "../../env";
import {
  inEnvironmentSpeechRuntime,
  runEnvironmentSpeech,
} from "../../speech/runEnvironmentSpeech";
import {
  chooseAudioDestination,
  pendingCloudAudioChoice,
  useAudioChoice,
} from "../../speech/voiceConsent";
import type { EnvironmentPresentation } from "../../state/environments";
import { useEnvironmentScope, usePreparedConnection } from "../../state/session";
import { Button } from "../ui/button";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  useComboboxFilter,
} from "../ui/combobox";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { SecretInput } from "./SecretInput";
import { SecretSourceSelect } from "./SecretSourceInput";

// Per dialog instance, not an Atom.family: key presence must be read fresh each time it opens.
function useCloudRead<A, E>(
  prepared: PreparedConnection | null,
  read: (prepared: PreparedConnection) => Effect.Effect<A, E, HttpClient.HttpClient>,
) {
  const make = (connection: PreparedConnection | null) => ({
    prepared: connection,
    atom: Atom.make(
      connection ? inEnvironmentSpeechRuntime(read(connection)) : Effect.succeed(null),
    ),
  });
  const [current, setCurrent] = useState(() => make(prepared));
  if (current.prepared !== prepared) setCurrent(make(prepared));
  return [useAtomValue(current.atom), useAtomRefresh(current.atom)] as const;
}
const isApiKey = Schema.is(CloudSpeechApiKey);
const isModelId = Schema.is(CloudSpeechModelId);
type CloudDestination = Extract<VoiceTranscriptionDestination, { kind: "cloud" }>;

function ModelPicker({
  models,
  value,
  onChange,
  disabled,
  current,
}: {
  models: ReadonlyArray<CloudSpeechModel>;
  value: string;
  onChange: (next: string) => void;
  disabled: boolean;
  /** The grant's model, flagged when the catalog no longer lists it. */
  current: string | undefined;
}) {
  const { locale: i18nLocale } = useI18n();
  const { contains } = useComboboxFilter();
  const selected = models.find((model) => model.id === value) ?? null;
  const delisted = current !== undefined && !models.some((model) => model.id === current);
  return (
    <div className="grid gap-1">
      <Combobox
        items={models}
        itemToStringLabel={(model: CloudSpeechModel) => model.name}
        itemToStringValue={(model: CloudSpeechModel) => model.id}
        filter={(model: CloudSpeechModel, query) =>
          contains(model.name, query) || contains(model.id, query)
        }
        value={selected}
        onValueChange={(model) => onChange(model?.id ?? "")}
        autoHighlight
        disabled={disabled}
      >
        <ComboboxInput
          id="voice-cloud-model"
          aria-label={translateWebSource(i18nLocale, "OpenRouter model")}
          placeholder={translateWebSource(i18nLocale, "Search transcription models")}
          autoFocus
          size="sm"
        />
        <ComboboxPopup>
          <ComboboxEmpty>
            {translateWebSource(i18nLocale, "No transcription model matches.")}
          </ComboboxEmpty>
          <ComboboxList className="max-h-64">
            {(model: CloudSpeechModel) => (
              <ComboboxItem key={model.id} value={model}>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate">{model.name}</span>
                  <span className="truncate text-xs text-muted-foreground">{model.id}</span>
                </span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
      {delisted ? (
        <p className="text-sm text-destructive" role="alert">
          {i18nLocale === "zh-CN"
            ? `OpenRouter 已不再提供 ${current}。在你选择其他模型前，语音输入将保持关闭。`
            : `OpenRouter no longer lists ${current}. Dictation stays off until you choose another model.`}
        </p>
      ) : selected ? (
        <p className="truncate text-xs text-muted-foreground">{selected.id}</p>
      ) : null}
    </div>
  );
}

export function CloudVoiceConfiguration({
  environment,
  provider,
  active,
  close,
}: {
  environment: Pick<EnvironmentPresentation, "environmentId" | "label" | "serverConfig">;
  provider: CloudSpeechProvider;
  active: boolean;
  close: () => void;
}) {
  const { locale: translationLocale } = useI18n();
  const isZh = translationLocale === "zh-CN";
  const id = environment.environmentId;
  const name = CLOUD_SPEECH_LABELS[provider];
  const company = CLOUD_SPEECH_PROVIDER_NAMES[provider];
  const routed = provider === "openrouter";
  const formId = useId();
  const prepared = Option.getOrNull(usePreparedConnection(id));
  const canUse = useEnvironmentScope(id, AuthOrchestrationOperateScope);
  const canManage = useEnvironmentScope(id, AuthSettingsWriteScope);
  const [presence, refresh] = useCloudRead(canUse ? prepared : null, getCloudSpeechKeys);
  const [models, refreshModels] = useCloudRead(
    routed && canUse ? prepared : null,
    getCloudSpeechModels,
  );
  const choice = useAudioChoice();
  const grant = choice === "off" ? null : choice;
  const currentModel =
    active && grant?.destination.kind === "cloud" && grant.destination.provider === "openrouter"
      ? grant.destination.model
      : undefined;
  const [remove, setRemove] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [model, setModel] = useState(currentModel ?? "");
  const saved = AsyncResult.isSuccess(presence) ? presence.value?.[provider] : undefined;
  const existing = environment.serverConfig?.settings?.cloudSpeechCredentials?.[provider];
  const sources =
    isSecretsFeatureEnabled && environment.serverConfig?.secretReferences
      ? configuredSecretSources(environment.serverConfig.settings?.secretProviders ?? {})
      : [];
  const reference =
    isSecretReference(existing) && sources.some((s) => s.id === existing.provider)
      ? existing
      : null;
  const [sourceId, setSourceId] = useState<SecretProviderId | null>(reference?.provider ?? null);
  const [draft, setDraft] = useState(reference?.reference ?? "");
  const source = sources.find((s) => s.id === sourceId);
  const credential =
    sourceId !== null
      ? source && secretRequestReference(source, draft)
      : isApiKey(draft.trim())
        ? draft.trim()
        : undefined;
  const keyChanged =
    credential !== undefined &&
    !(
      isSecretReference(credential) &&
      reference?.provider === credential.provider &&
      reference.reference === credential.reference
    );
  const connected = canUse && prepared !== null;
  // Fixed providers edit the key only when nothing is saved or the device already uses them.
  const editingKey = canManage && saved !== undefined && (routed || active || !saved);
  const listedModels = AsyncResult.isSuccess(models) ? (models.value?.models ?? null) : null;
  const modelChosen = isModelId(model) && (listedModels?.some((m) => m.id === model) ?? false);
  const keyReady = draft.trim() ? credential !== undefined : Boolean(saved);
  const modelChanged = model !== (currentModel ?? "");
  const destination = (): CloudDestination =>
    routed && isModelId(model)
      ? { kind: "cloud", provider: "openrouter", environmentId: id, model }
      : { kind: "cloud", provider: provider as "openai" | "xai", environmentId: id };
  const enable = () => chooseAudioDestination(destination());
  const canSubmit = routed
    ? modelChosen && keyReady && (!active || modelChanged || keyChanged)
    : credential !== undefined;

  const saveKey = async (value: SettingsSecretValue | null, thenEnable: boolean) => {
    if (!connected || !canManage || busy) return;
    setError("");
    setBusy(true);
    try {
      const commit = thenEnable ? pendingCloudAudioChoice(destination()) : null;
      await runEnvironmentSpeech(setCloudSpeechKey(prepared, provider, value));
      refresh();
      commit?.();
      close();
    } catch {
      setError(
        translateWebSource(
          translationLocale,
          "Couldn’t save this change. Check your connection and try again.",
        ),
      );
    }
    setBusy(false);
  };
  const submit = () => {
    if (!canSubmit || busy) return;
    const grantChanges = !active || modelChanged;
    if (credential !== undefined && (!routed || keyChanged))
      return void saveKey(credential, grantChanges);
    // Model-only changes never write to the environment.
    if (grantChanges) enable();
    close();
  };

  const keyField = (
    <>
      <Label htmlFor="voice-cloud-key">
        {translateWebSource(translationLocale, routed && saved ? "Replace API key" : "API key")}
      </Label>
      <div className="flex min-w-0 items-start gap-2">
        {sources.length > 0 && (
          <SecretSourceSelect
            value={sourceId}
            sources={sources}
            label={isZh ? `${company} API 密钥` : `${company} API key`}
            disabled={busy}
            onValueChange={(next) => {
              setSourceId(next);
              setDraft("");
              setError("");
            }}
          />
        )}
        <div className="min-w-0 flex-1">
          {sourceId !== null ? (
            <Input
              key={sourceId}
              id="voice-cloud-key"
              name="reference"
              aria-label={isZh ? `${company} API 密钥引用` : `${company} API key reference`}
              autoFocus={!routed}
              placeholder={source?.referencePlaceholder}
              value={draft}
              disabled={busy}
              autoComplete="off"
              spellCheck={false}
              onChange={(event) => setDraft(event.target.value)}
            />
          ) : (
            <SecretInput
              id="voice-cloud-key"
              name="key"
              aria-label={isZh ? `${company} API 密钥` : `${company} API key`}
              autoFocus={!routed}
              placeholder={translateWebSource(translationLocale, "Enter API key")}
              value={draft}
              configured={saved === true}
              disabled={busy}
              maxLength={4096}
              onChange={(event) => setDraft(event.target.value)}
            />
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        {draft.trim() && !credential
          ? (source?.invalidReferenceMessage ??
            translateWebSource(
              translationLocale,
              "Enter an API key, not a URL or secret reference.",
            ))
          : active && !routed
            ? translateWebSource(translationLocale, "Updating the key keeps dictation enabled.")
            : routed && saved
              ? translateWebSource(translationLocale, "Leave blank to keep the saved key.")
              : isZh
                ? `所有在 ${environment.label} 上拥有语音输入权限的成员都会使用此密钥计费。`
                : `Anyone with dictation access to ${environment.label} can bill this key.`}
      </p>
    </>
  );

  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open && !busy) close();
      }}
    >
      <DialogPopup className="max-w-md" showCloseButton={!busy}>
        <DialogHeader>
          <DialogTitle>
            {remove
              ? isZh
                ? `要移除 ${company} 密钥吗？`
                : `Remove the ${company} key?`
              : active
                ? routed
                  ? translateWebSource(translationLocale, "Manage OpenRouter dictation")
                  : isZh
                    ? `管理 ${company} 密钥`
                    : `Manage ${company} key`
                : isZh
                  ? `要使用 ${name} 进行语音输入吗？`
                  : `Use ${name} for dictation?`}
          </DialogTitle>
          <DialogDescription>
            {remove
              ? isZh
                ? `在 ${environment.label} 上使用 ${name} 进行语音输入的所有成员都将失去访问权限。`
                : `Everyone using ${name} for dictation on ${environment.label} will lose access.`
              : active && !routed
                ? isZh
                  ? `所有在 ${environment.label} 上拥有语音输入权限的成员都可以使用此 API 密钥。`
                  : `Anyone with dictation access to ${environment.label} can use this API key.`
                : isZh
                  ? routed
                    ? `停止录音后，${environment.label} 会将录音发送至 OpenRouter。OpenRouter 会决定由哪家服务运行你的模型。T3 Code 会请求零数据留存，但你的 OpenRouter 账号可能允许安全留存。`
                    : `停止录音后，${environment.label} 会将你的录音以及包含项目名称在内的词表提示发送至 ${company}。`
                  : cloudSpeechDisclosure(provider, environment.label)}
          </DialogDescription>
        </DialogHeader>
        {!remove && (
          <DialogPanel>
            {!connected ? (
              <p>
                {isZh
                  ? `请先连接到 ${environment.label} 并确保拥有语音输入权限以继续。`
                  : `Connect to ${environment.label} with dictation access to continue.`}
              </p>
            ) : AsyncResult.isFailure(presence) && saved === undefined ? (
              <Button size="sm" variant="outline" onClick={refresh}>
                {translateWebSource(translationLocale, "Retry loading API key")}
              </Button>
            ) : routed &&
              AsyncResult.isSuccess(presence) &&
              presence.value &&
              saved === undefined ? (
              <p>
                {isZh
                  ? `请更新 ${environment.label} 以使用 OpenRouter 语音输入。`
                  : `Update ${environment.label} to use OpenRouter dictation.`}
              </p>
            ) : saved === undefined ? (
              <p role="status">
                {translateWebSource(translationLocale, "Checking for an API key…")}
              </p>
            ) : routed ? (
              <form
                id={formId}
                className="grid gap-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  submit();
                }}
              >
                <div className="grid gap-2">
                  <Label htmlFor="voice-cloud-model">
                    {translateWebSource(translationLocale, "Model")}
                  </Label>
                  {listedModels ? (
                    <ModelPicker
                      models={listedModels}
                      value={model}
                      onChange={setModel}
                      disabled={busy}
                      current={currentModel}
                    />
                  ) : AsyncResult.isFailure(models) ? (
                    <Button size="sm" variant="outline" type="button" onClick={refreshModels}>
                      {translateWebSource(translationLocale, "Retry loading models")}
                    </Button>
                  ) : (
                    <p role="status" className="text-sm text-muted-foreground">
                      {translateWebSource(translationLocale, "Loading transcription models…")}
                    </p>
                  )}
                </div>
                {editingKey ? (
                  <div className="grid gap-2">{keyField}</div>
                ) : !saved ? (
                  <p>
                    {isZh
                      ? `请联系 ${environment.label} 的管理员添加 API 密钥。`
                      : `Ask an administrator on ${environment.label} to add an API key.`}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {isZh
                      ? `使用保存在 ${environment.label} 上的 API 密钥。此选择仅适用于当前设备。`
                      : `Uses the API key saved on ${environment.label}. This choice applies only to this device.`}
                  </p>
                )}
              </form>
            ) : editingKey ? (
              <form
                id={formId}
                className="grid gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  submit();
                }}
              >
                {keyField}
              </form>
            ) : !saved ? (
              <p>
                {isZh
                  ? `请联系 ${environment.label} 的管理员添加 API 密钥。`
                  : `Ask an administrator on ${environment.label} to add an API key.`}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                {translateWebSource(
                  translationLocale,
                  "This choice applies only to this device. Choose Off to stop sharing.",
                )}
              </p>
            )}
          </DialogPanel>
        )}
        {error && (
          <p className="px-6 text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
        <DialogFooter>
          {connected && canManage && saved && (active || routed) && !remove && (
            <div className="sm:mr-auto">
              <Button
                type="button"
                size="sm"
                variant="ghost"
                disabled={busy}
                onClick={() => setRemove(true)}
              >
                {translateWebSource(translationLocale, "Remove key…")}
              </Button>
            </div>
          )}
          <Button type="button" size="sm" variant="outline" disabled={busy} onClick={close}>
            {translateWebSource(translationLocale, "Cancel")}
          </Button>
          {connected &&
            (remove ? (
              <Button
                type="button"
                size="sm"
                variant="destructive"
                disabled={busy}
                onClick={() => void saveKey(null, false)}
              >
                {translateWebSource(translationLocale, "Remove key")}
              </Button>
            ) : routed ? (
              saved !== undefined && (saved || canManage) ? (
                <Button type="submit" form={formId} size="sm" disabled={busy || !canSubmit}>
                  {translateWebSource(translationLocale, active ? "Save" : "Save and enable")}
                </Button>
              ) : null
            ) : editingKey ? (
              <Button type="submit" form={formId} size="sm" disabled={busy || !credential}>
                {translateWebSource(translationLocale, active ? "Save key" : "Save and enable")}
              </Button>
            ) : saved && !active ? (
              <Button
                type="button"
                size="sm"
                onClick={() => {
                  enable();
                  close();
                }}
              >
                {isZh ? `使用 ${name}` : `Use ${name}`}
              </Button>
            ) : null)}
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
