import type { AppLocalePreference } from "@t3tools/contracts/settings";
import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { createContext, useContext } from "react";

import { translateWebMessage, type WebMessageKey, type WebMessageValues } from "./messages";

export type WebTranslate = (key: WebMessageKey, values?: WebMessageValues) => string;

export interface WebI18nContextValue {
  readonly locale: ResolvedAppLocale;
  readonly appLocale: AppLocalePreference;
  readonly setAppLocale: (locale: AppLocalePreference) => void;
  readonly t: WebTranslate;
}

const translateEnglish: WebTranslate = (key, values) => translateWebMessage("en", key, values);
const noopSetAppLocale = (_locale: AppLocalePreference) => undefined;

export const WebI18nContext = createContext<WebI18nContextValue>({
  locale: "en",
  appLocale: "system",
  setAppLocale: noopSetAppLocale,
  t: translateEnglish,
});

let activeWebLocale: ResolvedAppLocale | null = null;

export function setActiveWebLocale(locale: ResolvedAppLocale): void {
  activeWebLocale = locale;
}

export function getActiveWebLocale(): ResolvedAppLocale {
  if (activeWebLocale !== null) return activeWebLocale;
  if (typeof document !== "undefined" && document.documentElement?.lang === "zh-CN") {
    return "zh-CN";
  }
  return "en";
}

/** Read locale state without importing the settings store or connection runtime. */
export function useI18n(): WebI18nContextValue {
  return useContext(WebI18nContext);
}

export function splitWebTranslation(
  t: WebTranslate,
  key: WebMessageKey,
  placeholder: string,
  values: WebMessageValues = {},
): readonly [before: string, after: string] {
  const marker = `\u0000t3-${placeholder}\u0000`;
  const message = t(key, { ...values, [placeholder]: marker });
  const markerIndex = message.indexOf(marker);
  return markerIndex === -1
    ? [message, ""]
    : [message.slice(0, markerIndex), message.slice(markerIndex + marker.length)];
}
