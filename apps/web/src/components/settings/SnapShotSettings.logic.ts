import type { ClientSettingsPatch, DesktopSnapShotState, SnapShotSound } from "@t3tools/contracts";
import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import {
  captureSetupBackend,
  captureSetupDesktopName,
  captureSetupAccessReady,
  captureSetupMacPermissionsReady,
} from "./SnapShotSetupDialog.logic";

export function snapShotStatus(
  state: DesktopSnapShotState | null,
  enabled: boolean,
  locale: ResolvedAppLocale = "en",
): string {
  const isZh = locale === "zh-CN";
  if (!state) return isZh ? "正在检查快照…" : "Checking snapshots…";
  if (state.mode === "unavailable") {
    return state.message ?? (isZh ? "当前平台不支持此功能。" : "Not supported on this platform.");
  }
  if (!enabled) return isZh ? "开启此项即可设置快照。" : "Turn this on to set up snapshots.";
  return snapShotSetupSummary(state, enabled, locale);
}

export function snapShotSetupSummary(
  state: DesktopSnapShotState,
  enabled: boolean,
  locale: ResolvedAppLocale = "en",
): string {
  const isZh = locale === "zh-CN";
  if (state.message) return isZh ? "捕获需要处理" : "Capture needs attention";
  if (state.linuxBackend === "hyprland" && state.hyprlandHelper?.status !== "ready")
    return state.hyprlandHelper?.status === "error"
      ? isZh
        ? "请在设置中检查捕获权限"
        : "Check capture access in setup"
      : isZh
        ? "安装捕获辅助程序以继续"
        : "Install the capture helper to continue";
  if (captureSetupBackend(state) === "gnome" && state.gnomeExtension?.status !== "enabled")
    return isZh ? "设置活动窗口快照" : "Set up active-window snapshots";
  if (captureSetupBackend(state) === "kde" && state.kdeHelper?.status !== "ready")
    return state.kdeHelper?.status === "error"
      ? isZh
        ? "请在设置中检查捕获权限"
        : "Check capture access in setup"
      : isZh
        ? "安装捕获辅助程序以继续"
        : "Install the capture helper to continue";
  if (captureSetupBackend(state) === "picker")
    return isZh
      ? "仅支持手动捕获，每次需自行选择窗口"
      : "Manual capture only. You'll choose a window each time";
  if (!enabled) return isZh ? "启用捕获以继续" : "Enable capture to continue";
  if (state.shortcutPending)
    return state.linuxBackend === "hyprland"
      ? isZh
        ? "正在连接你的快捷键…"
        : "Connecting your shortcut…"
      : isZh
        ? "等待快捷键权限"
        : "Waiting for shortcut permission";
  if (state.shortcutVerified) return isZh ? "已就绪，可以捕获" : "Ready to capture";
  if (state.linuxBackend === "niri" && state.shortcutBinding)
    return isZh ? "请从其他应用使用你的快捷键" : "Use your shortcut from another app";
  if (state.linuxBackend === "hyprland" && state.shortcutActionRegistered)
    return isZh ? "请从其他应用使用你的快捷键" : "Use your shortcut from another app";
  if (state.shortcutRegistered) {
    return state.shortcutLabel
      ? isZh
        ? "已就绪，可以捕获"
        : "Ready to capture"
      : isZh
        ? "快捷键已保存"
        : "Shortcut saved";
  }
  return isZh ? "完成快捷键设置" : "Finish shortcut setup";
}

export function snapShotShortcutStatus(
  state: DesktopSnapShotState | null,
  locale: ResolvedAppLocale = "en",
): string | null {
  const isZh = locale === "zh-CN";
  if (!state) return null;
  if (state.linuxBackend === "hyprland") return state.shortcutMessage;
  if (state.shortcutPending) {
    return isZh
      ? "请批准快捷键权限提示以继续。"
      : "Approve the shortcut permission prompt to continue.";
  }
  if (state.shortcutRegistered) {
    return state.mode === "portal" ? null : isZh ? "快捷键已保存。" : "Shortcut saved.";
  }
  return state.shortcutMessage;
}

export function snapShotSetupButtonLabel(
  state: DesktopSnapShotState | null,
  locale: ResolvedAppLocale = "en",
): string {
  const isZh = locale === "zh-CN";
  if (!state) return isZh ? "继续设置" : "Continue setup";
  if (captureSetupAccessReady(state)) return isZh ? "管理捕获" : "Manage capture";
  const desktop = captureSetupDesktopName(state);
  return desktop
    ? isZh
      ? `设置 ${desktop} 捕获`
      : `Set up ${desktop} capture`
    : isZh
      ? "继续设置"
      : "Continue setup";
}

export function snapShotSetupComplete(
  state: DesktopSnapShotState | null,
  includeAccessibility: boolean,
): boolean {
  if (state?.windows) return true;
  return (
    state?.macPermissions !== undefined &&
    captureSetupAccessReady(state) &&
    captureSetupMacPermissionsReady(state, includeAccessibility) &&
    state.shortcutRegistered
  );
}

export type SnapShotSoundSelection = SnapShotSound | "off";

export function snapShotFeedbackUnavailableMessage(
  state: DesktopSnapShotState | null,
  locale: ResolvedAppLocale = "en",
): string | undefined {
  if (state?.mode !== "portal" || state.linuxFeedbackAvailable) return undefined;
  const isZh = locale === "zh-CN";
  if (state.linuxBackend === "hyprland")
    return state.hyprlandHelper?.status === "ready"
      ? isZh
        ? "当前桌面环境不支持捕获反馈效果。"
        : "Capture effects aren't available on this desktop."
      : isZh
        ? "请安装或更新捕获辅助程序以启用反馈效果。"
        : "Install or update the capture helper to enable effects.";
  if (state.linuxBackend === "niri") {
    return isZh ? "Niri 上不支持捕获反馈效果。" : "Capture effects aren't available on Niri.";
  }
  if (state.linuxBackend === "kde")
    return state.kdeHelper?.status === "ready"
      ? isZh
        ? "当前桌面环境不支持捕获反馈效果。"
        : "Capture effects aren't available on this desktop."
      : isZh
        ? "请安装或更新捕获辅助程序以启用反馈效果。"
        : "Install or update the capture helper to enable effects.";
  return state.linuxBackend === "gnome-extension"
    ? isZh
      ? "请更新 GNOME 扩展，然后注销并重新登录以启用反馈效果。"
      : "Update the GNOME extension, then sign out and back in to enable effects."
    : captureSetupBackend(state) === "gnome"
      ? isZh
        ? "请完成扩展设置以启用反馈效果。"
        : "Finish extension setup to enable effects."
      : isZh
        ? "当前桌面环境不支持捕获反馈效果。"
        : "Capture effects aren't available on this desktop.";
}

export function snapShotDescription(
  state: DesktopSnapShotState | null,
  locale: ResolvedAppLocale = "en",
): string {
  const isZh = locale === "zh-CN";
  return state?.mode === "portal" && captureSetupBackend(state) === "picker"
    ? isZh
      ? "此处不支持自动捕获，请改为手动选择窗口。"
      : "Automatic capture isn't available here. Choose a window instead."
    : isZh
      ? "捕获一个窗口并将其附加到当前草稿。"
      : "Capture a window and attach it to your current draft.";
}

export function snapShotAccessibilityUnavailableMessage(
  state: DesktopSnapShotState | null,
  locale: ResolvedAppLocale = "en",
): string | undefined {
  if (state?.mode !== "portal") return undefined;
  if (state.linuxBackend === "picker" || state.linuxBackend === "screenshot-portal") {
    return locale === "zh-CN"
      ? "当前桌面环境仅提供屏幕截图。"
      : "This desktop only provides a screenshot.";
  }
  return undefined;
}

export function snapShotUnavailableMessage(
  hasBridge: boolean,
  locale: ResolvedAppLocale = "en",
): string | undefined {
  if (hasBridge) return undefined;
  const isZh = locale === "zh-CN";
  return typeof window !== "undefined" && window.desktopBridge
    ? isZh
      ? "请更新桌面应用以使用快照功能。"
      : "Update the desktop app to use snapshots."
    : isZh
      ? "仅在桌面应用中可用。"
      : "Only available in the desktop app.";
}

export function snapShotSoundPatch(sound: SnapShotSoundSelection): ClientSettingsPatch {
  return sound === "off"
    ? { snapShotPlaySound: false }
    : { snapShotPlaySound: true, snapShotSound: sound };
}

export function createRecordingRequestTracker() {
  let currentRequest: symbol | null = null;

  return {
    tryBegin() {
      if (currentRequest) return null;
      currentRequest = Symbol();
      return currentRequest;
    },
    clear() {
      currentRequest = null;
    },
    owns(request: symbol) {
      return currentRequest === request;
    },
  };
}
