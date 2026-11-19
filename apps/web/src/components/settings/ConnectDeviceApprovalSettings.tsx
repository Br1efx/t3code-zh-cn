import { useI18n } from "~/i18n/WebI18nContext";
import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { translateWebSource } from "~/i18n/messages";
import type { AuthConnectDevice, EnvironmentId } from "@t3tools/contracts";
import {
  isAtomCommandInterrupted,
  squashAtomCommandFailure,
} from "@t3tools/client-runtime/state/runtime";
import * as DateTime from "effect/DateTime";
import { useState } from "react";

import { localizeRelayErrorMessage } from "~/cloud/relayFailureReason";
import type { ServerPairingLinkRecord } from "~/environments/primary";
import { authEnvironment } from "~/state/auth";
import { useAtomCommand } from "~/state/use-atom-command";
import { Button } from "../ui/button";
import { stackedThreadToast, toastManager } from "../ui/toast";
import {
  connectDeviceName,
  describeConnectDeviceClient,
  formatAccessTimestamp,
} from "./ConnectionsSettings.logic";
import { ITEM_ROW_CLASSNAME, ITEM_ROW_INNER_CLASSNAME } from "./itemRows";
import { SettingsSection } from "./settingsLayout";

function reportFailure(
  locale: ResolvedAppLocale,
  title: string,
  result: Parameters<typeof isAtomCommandInterrupted>[0],
) {
  if (result._tag !== "Failure" || isAtomCommandInterrupted(result)) return;
  const error = squashAtomCommandFailure(result);
  toastManager.add(
    stackedThreadToast({
      type: "error",
      title: translateWebSource(locale, title),
      description:
        error instanceof Error
          ? localizeRelayErrorMessage(locale, error.message)
          : translateWebSource(locale, "An error occurred."),
    }),
  );
}

export function ConnectDeviceApprovalSettings({
  environmentId,
  requests,
  devices,
  canWrite,
  requestRevoke,
}: {
  readonly environmentId: EnvironmentId;
  readonly requests: ReadonlyArray<ServerPairingLinkRecord>;
  readonly devices: ReadonlyArray<AuthConnectDevice>;
  readonly canWrite: boolean;
  /** Revokes now, or first asks to turn approval on when it is off. */
  readonly requestRevoke: (title: string, revoke: () => Promise<void>) => void;
}) {
  const { locale: i18nLocale } = useI18n();
  const approve = useAtomCommand(authEnvironment.approveConnectDevice, { reportFailure: false });
  const deny = useAtomCommand(authEnvironment.revokePairingLink, { reportFailure: false });
  const revoke = useAtomCommand(authEnvironment.revokeConnectDevice, { reportFailure: false });
  const [busyId, setBusyId] = useState<string | null>(null);

  const run = async (id: string, action: () => Promise<void>) => {
    setBusyId(id);
    await action();
    setBusyId(null);
  };

  return (
    <SettingsSection id="connect-devices" title="T3 Connect devices">
      {requests.map((request) => {
        const connectRequest = request.connectDeviceRequest;
        if (!connectRequest) return null;
        const busy = busyId === request.id;
        return (
          <div key={request.id} className={ITEM_ROW_CLASSNAME}>
            <div className={ITEM_ROW_INNER_CLASSNAME}>
              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-sm font-medium text-foreground">
                  {translateWebSource(i18nLocale, "Waiting for approval")} ·{" "}
                  <span className="font-mono tabular-nums">{connectRequest.verificationCode}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {i18nLocale === "zh-CN"
                    ? `${describeConnectDeviceClient(connectRequest, i18nLocale)}。仅在你面前的设备显示此验证码时再批准。`
                    : `${describeConnectDeviceClient(connectRequest, i18nLocale)}. Approve only if the device in front of you shows this code.`}
                </p>
              </div>
              <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto sm:justify-end">
                <Button
                  size="xs"
                  variant="destructive-outline"
                  disabled={!canWrite || busy}
                  onClick={() =>
                    void run(request.id, async () =>
                      reportFailure(
                        i18nLocale,
                        "Could not deny the device",
                        await deny({ environmentId, input: { id: request.id } }),
                      ),
                    )
                  }
                >
                  Deny
                </Button>
                <Button
                  size="xs"
                  disabled={!canWrite || busy}
                  onClick={() =>
                    void run(request.id, async () =>
                      reportFailure(
                        i18nLocale,
                        "Could not approve the device",
                        await approve({ environmentId, input: { pairingLinkId: request.id } }),
                      ),
                    )
                  }
                >
                  {busy ? "Saving…" : "Approve"}
                </Button>
              </div>
            </div>
          </div>
        );
      })}
      {devices.map((device) => {
        const busy = busyId === device.proofKeyThumbprint;
        const deviceName = connectDeviceName(device, i18nLocale);
        return (
          <div key={device.proofKeyThumbprint} className={ITEM_ROW_CLASSNAME}>
            <div className={ITEM_ROW_INNER_CLASSNAME}>
              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-sm font-medium text-foreground">
                  {describeConnectDeviceClient(device, i18nLocale)}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-mono tabular-nums">{device.verificationCode}</span>
                  <span aria-hidden> · </span>
                  {i18nLocale === "zh-CN"
                    ? `自 ${formatAccessTimestamp(DateTime.formatIso(device.approvedAt), i18nLocale)} 起受信任`
                    : `Trusted since ${formatAccessTimestamp(DateTime.formatIso(device.approvedAt), i18nLocale)}`}
                </p>
              </div>
              <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto sm:justify-end">
                <Button
                  size="xs"
                  variant="destructive-outline"
                  disabled={!canWrite || busy}
                  onClick={() =>
                    requestRevoke(
                      i18nLocale === "zh-CN"
                        ? `撤销 ${deviceName} 的访问权限？`
                        : `Revoke ${deviceName}?`,
                      () =>
                        run(device.proofKeyThumbprint, async () =>
                          reportFailure(
                            i18nLocale,
                            "Could not revoke the device",
                            await revoke({
                              environmentId,
                              input: { proofKeyThumbprint: device.proofKeyThumbprint },
                            }),
                          ),
                        ),
                    )
                  }
                >
                  {busy ? "Revoking…" : "Revoke"}
                </Button>
              </div>
            </div>
          </div>
        );
      })}
      {devices.length === 0 && requests.length === 0 ? (
        <div className={ITEM_ROW_CLASSNAME}>
          <p className="text-xs text-muted-foreground/60">
            {translateWebSource(i18nLocale, "No device has connected through T3 Connect yet.")}
          </p>
        </div>
      ) : null}
    </SettingsSection>
  );
}
