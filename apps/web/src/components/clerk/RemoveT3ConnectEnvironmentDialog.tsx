import { translateWebSource } from "~/i18n/messages";
import { useI18n } from "~/i18n/WebI18nContext";
import { Discovery } from "@t3tools/client-runtime/relay";
import type { EnvironmentId } from "@t3tools/contracts";
import { useState } from "react";

import { useRelayEnvironmentDiscovery } from "../../state/environments";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button, InlineButton } from "../ui/button";
import { useT3ConnectAccountPage } from "./T3ConnectAccountPages";

export function RemoveT3ConnectEnvironmentDialog({
  environmentLabel,
  environmentId,
  onCancel,
  onConfirm,
}: {
  readonly environmentLabel: string | null;
  readonly environmentId: EnvironmentId | null;
  readonly onCancel: () => void;
  readonly onConfirm: () => void;
}) {
  const { locale: translationLocale } = useI18n();
  const accountPage = useT3ConnectAccountPage();
  const discovery = useRelayEnvironmentDiscovery();
  const registration = environmentId
    ? Discovery.relayEnvironmentRegistration(discovery, environmentId)
    : "unknown";
  const [shown, setShown] = useState({ label: environmentLabel, registration });
  if (
    environmentLabel !== null &&
    (environmentLabel !== shown.label || registration !== shown.registration)
  ) {
    setShown({ label: environmentLabel, registration });
  }
  const openAccountPage = accountPage.open;
  const accountPageLabel = translateWebSource(translationLocale, "T3 Connect settings");
  const accountPageLink = openAccountPage ? (
    <InlineButton
      onClick={() => {
        onCancel();
        openAccountPage();
      }}
    >
      {accountPageLabel}
    </InlineButton>
  ) : (
    accountPageLabel
  );

  return (
    <>
      <AlertDialog
        open={environmentLabel !== null}
        onOpenChange={(open) => {
          if (!open) onCancel();
        }}
      >
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {translationLocale === "zh-CN" ? (
                `要从当前设备移除 ${shown.label} 吗？`
              ) : (
                <>
                  {translateWebSource(translationLocale, "Remove")} {shown.label} from this device?
                </>
              )}
            </AlertDialogTitle>
            <AlertDialogDescription>
              This forgets its pairing, credentials, and cached threads here.
            </AlertDialogDescription>
            <AlertDialogDescription>
              {shown.registration === "registered" ? (
                translationLocale === "zh-CN" ? (
                  <>
                    该设备仍会保留在你的 T3 Connect 账号中并占用远程名额。如需释放名额，请前往{" "}
                    {accountPageLink} 取消注册。
                  </>
                ) : (
                  <>
                    It stays on your T3 Connect account and keeps its host space. Deregister it in{" "}
                    {accountPageLink} to free it.
                  </>
                )
              ) : shown.registration === "unregistered" ? (
                translateWebSource(translationLocale, "It's no longer on your T3 Connect account.")
              ) : translationLocale === "zh-CN" ? (
                <>
                  这不会修改你的 T3 Connect 账号。如需在账号中取消注册，请前往 {accountPageLink}。
                </>
              ) : (
                <>
                  This doesn't change your T3 Connect account. To deregister it there, use{" "}
                  {accountPageLink}.
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="outline" />}>
              {translateWebSource(translationLocale, "Cancel")}
            </AlertDialogClose>
            <Button variant="destructive" onClick={onConfirm}>
              Remove from this device
            </Button>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
      {accountPage.portals}
    </>
  );
}
