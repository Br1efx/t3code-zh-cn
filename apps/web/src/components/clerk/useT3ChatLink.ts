import { findErrorTraceId } from "@t3tools/client-runtime/errors";
import {
  isAtomCommandInterrupted,
  squashAtomCommandFailure,
} from "@t3tools/client-runtime/state/runtime";
import { useState } from "react";

import {
  createManagedRelayT3ChatLinkRequestCommand,
  unlinkManagedRelayT3ChatCommand,
  useManagedRelayT3ChatLink,
} from "../../cloud/managedRelayState";
import { localizeRelayErrorMessage, relayFailureReason } from "../../cloud/relayFailureReason";
import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { translateWebSource } from "../../i18n/messages";
import { useI18n } from "../../i18n/WebI18nContext";
import { readLocalApi } from "../../localApi";
import { useAtomCommand } from "../../state/use-atom-command";
import { toastManager } from "../ui/toast";

function reportFailure(locale: ResolvedAppLocale, title: string, cause: unknown) {
  const traceId = findErrorTraceId(cause);
  const description =
    relayFailureReason(cause, locale) ??
    (cause instanceof Error
      ? localizeRelayErrorMessage(locale, cause.message)
      : translateWebSource(locale, "Try again."));
  toastManager.add({
    type: "error",
    title: translateWebSource(locale, title),
    description,
    data: traceId
      ? {
          secondaryActionProps: {
            children: translateWebSource(locale, "Copy trace ID"),
            onClick: () => void navigator.clipboard?.writeText(traceId),
          },
        }
      : undefined,
  });
}

/** Starts and removes the T3 Chat link that raises the T3 Connect tunnel cap. */
export function useT3ChatLink() {
  const { locale } = useI18n();
  const linkState = useManagedRelayT3ChatLink();
  const createLinkRequest = useAtomCommand(createManagedRelayT3ChatLinkRequestCommand, {
    reportFailure: false,
  });
  const unlinkCommand = useAtomCommand(unlinkManagedRelayT3ChatCommand, { reportFailure: false });
  const [pending, setPending] = useState<"link" | "unlink" | null>(null);
  // Kept so a blocked popup still leaves the user a link to open.
  const [linkUrl, setLinkUrl] = useState<string | null>(null);

  const link = async () => {
    const accountId = linkState.accountId;
    if (!accountId || pending) return;
    setPending("link");
    const result = await createLinkRequest({ accountId });
    if (result._tag === "Success") {
      setLinkUrl(result.value);
      await readLocalApi()
        ?.shell.openExternal(result.value)
        .catch(() => undefined);
    } else if (!isAtomCommandInterrupted(result)) {
      reportFailure(locale, "Could not start linking", squashAtomCommandFailure(result));
    }
    setPending(null);
  };

  const unlink = async () => {
    const accountId = linkState.accountId;
    if (!accountId || pending) return;
    setPending("unlink");
    const result = await unlinkCommand({ accountId });
    if (result._tag === "Success") {
      setLinkUrl(null);
      linkState.refresh();
    } else if (!isAtomCommandInterrupted(result)) {
      reportFailure(locale, "Could not unlink T3 Chat", squashAtomCommandFailure(result));
    }
    setPending(null);
  };

  return { linkState, pending, linkUrl, link, unlink };
}
