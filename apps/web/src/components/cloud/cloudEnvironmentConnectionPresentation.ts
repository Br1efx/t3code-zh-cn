import {
  connectionStatusText,
  type EnvironmentConnectionPresentation,
} from "@t3tools/client-runtime/connection";

import { localizeRelayErrorMessage } from "../../cloud/relayFailureReason";
import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { translateWebSource } from "../../i18n/messages";

export interface SavedCloudEnvironmentConnectionPresentation {
  readonly buttonLabel: string;
  readonly statusText: string;
  readonly tone: "connected" | "connecting" | "error" | "idle";
}

export function presentSavedCloudEnvironmentConnection(
  connection: EnvironmentConnectionPresentation,
  locale: ResolvedAppLocale = "en",
): SavedCloudEnvironmentConnectionPresentation {
  const statusText = localizeRelayErrorMessage(locale, connectionStatusText(connection));
  switch (connection.phase) {
    case "connected":
      return {
        buttonLabel: translateWebSource(locale, "Connected"),
        statusText,
        tone: "connected",
      };
    case "connecting":
      return {
        buttonLabel: translateWebSource(locale, "Connecting…"),
        statusText,
        tone: "connecting",
      };
    case "reconnecting":
      return {
        buttonLabel: translateWebSource(
          locale,
          connection.awaitingApproval ? "Waiting for approval…" : "Reconnecting…",
        ),
        statusText,
        tone: "connecting",
      };
    case "unsupported":
      return {
        buttonLabel: translateWebSource(locale, "Client not supported"),
        statusText,
        tone: "idle",
      };
    case "error":
      return {
        buttonLabel: translateWebSource(locale, "Connection failed"),
        statusText,
        tone: "error",
      };
    case "offline":
      return {
        buttonLabel: translateWebSource(locale, "Offline"),
        statusText,
        tone: "idle",
      };
    case "available":
      return {
        buttonLabel: translateWebSource(locale, "Not connected"),
        statusText,
        tone: "idle",
      };
  }
}
