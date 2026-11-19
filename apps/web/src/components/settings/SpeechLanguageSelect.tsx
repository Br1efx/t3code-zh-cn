import { translateWebSource } from "~/i18n/messages";
import { useI18n } from "~/i18n/WebI18nContext";
import type { EnvironmentSpeechStatus } from "@t3tools/contracts";
import { effectiveSpeechLanguage } from "@t3tools/shared/speech";
import { updateClientSettings, useClientSettings } from "../../hooks/useSettings";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "../ui/select";

const languageNamesByLocale = new Map<string, Intl.DisplayNames>();

function getLanguageDisplayNames(locale: string): Intl.DisplayNames {
  let names = languageNamesByLocale.get(locale);
  if (!names) {
    names = new Intl.DisplayNames([locale], { type: "language" });
    languageNamesByLocale.set(locale, names);
  }
  return names;
}

export const languageLabel = (code: string, locale = "en") =>
  getLanguageDisplayNames(locale).of(code) ?? code;

type ModelLanguages = Pick<
  Extract<EnvironmentSpeechStatus, { supported: true }>,
  "languages" | "supportsLanguageDetection"
>;

export function SpeechLanguageSelect({ model }: { readonly model: ModelLanguages | null }) {
  const { locale: translationLocale } = useI18n();
  const preference = useClientSettings((settings) => settings.speechLanguage);
  const languages = model?.languages ?? [];
  const resolved = model
    ? effectiveSpeechLanguage(
        { languages, supportsLanguageDetection: model.supportsLanguageDetection ?? false },
        preference,
      )
    : preference;
  const localizedLanguage = (code: string) => languageLabel(code, translationLocale);
  const effectiveLabel =
    resolved === "auto"
      ? translateWebSource(translationLocale, "Auto-detect")
      : localizedLanguage(resolved);
  const unavailable =
    preference !== "auto" && preference !== resolved
      ? translationLocale === "zh-CN"
        ? `${localizedLanguage(preference)}不可用`
        : `${localizedLanguage(preference)} unavailable`
      : null;
  const label = unavailable
    ? translationLocale === "zh-CN"
      ? `${effectiveLabel}（${unavailable}）`
      : `${effectiveLabel} (${unavailable})`
    : preference === "auto" && resolved !== "auto"
      ? translationLocale === "zh-CN"
        ? `${translateWebSource(translationLocale, "Auto")}（${effectiveLabel}）`
        : `Auto (${effectiveLabel})`
      : effectiveLabel;
  return (
    <Select
      value={preference}
      disabled={!model}
      onValueChange={(value) => {
        if (value) void updateClientSettings({ speechLanguage: value });
      }}
    >
      <SelectTrigger
        size="sm"
        aria-label={translateWebSource(translationLocale, "Transcription language")}
        className="max-w-64"
      >
        <SelectValue>{label}</SelectValue>
      </SelectTrigger>
      <SelectPopup align="end" alignItemWithTrigger={false}>
        <SelectItem value="auto">{translateWebSource(translationLocale, "Auto")}</SelectItem>
        {unavailable ? (
          <SelectItem value={preference} disabled>
            {unavailable}
          </SelectItem>
        ) : null}
        {languages
          .toSorted((left, right) =>
            localizedLanguage(left).localeCompare(localizedLanguage(right), translationLocale),
          )
          .map((code) => (
            <SelectItem key={code} value={code}>
              {localizedLanguage(code)}
            </SelectItem>
          ))}
      </SelectPopup>
    </Select>
  );
}
