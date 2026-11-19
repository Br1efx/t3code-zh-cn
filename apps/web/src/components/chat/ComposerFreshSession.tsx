import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { EraserIcon } from "lucide-react";

import { translateWebSource } from "~/i18n/messages";
import type { ComposerBannerStackItem } from "./ComposerBannerStack";

/** Shown while `/clear` is armed; dismissing it keeps the current conversation. */
export function freshSessionBannerItem(
  onUndo: () => void,
  locale: ResolvedAppLocale = "en",
): ComposerBannerStackItem {
  return {
    id: "fresh-session",
    variant: "info",
    icon: <EraserIcon />,
    title: translateWebSource(locale, "Your next message starts a fresh session"),
    description: translateWebSource(locale, "The agent won't see earlier messages in this thread."),
    dismissLabel: translateWebSource(locale, "Keep the current session"),
    onDismiss: onUndo,
  };
}
