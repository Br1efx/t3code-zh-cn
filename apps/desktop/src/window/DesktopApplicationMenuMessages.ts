import type { AppLocalePreference } from "@t3tools/contracts";
import { resolveAppLocale, type ResolvedAppLocale } from "@t3tools/shared/appLocale";

export interface DesktopApplicationMenuMessages {
  readonly file: string;
  readonly edit: string;
  readonly view: string;
  readonly window: string;
  readonly help: string;
  readonly settings: string;
  readonly checkForUpdates: string;
  readonly about: (appName: string) => string;
  readonly services: string;
  readonly hide: (appName: string) => string;
  readonly hideOthers: string;
  readonly showAll: string;
  readonly open: (appName: string) => string;
  readonly quit: (appName: string) => string;
  readonly closeWindow: string;
  readonly undo: string;
  readonly redo: string;
  readonly cut: string;
  readonly copy: string;
  readonly paste: string;
  readonly pasteAndMatchStyle: string;
  readonly pasteAsText: string;
  readonly speech: string;
  readonly startSpeaking: string;
  readonly stopSpeaking: string;
  readonly delete: string;
  readonly selectAll: string;
  readonly reload: string;
  readonly forceReload: string;
  readonly toggleDeveloperTools: string;
  readonly toggleFullScreen: string;
  readonly minimize: string;
  readonly zoomWindow: string;
  readonly bringAllToFront: string;
  readonly actualSize: string;
  readonly zoomIn: string;
  readonly zoomOut: string;
  readonly ok: string;
  readonly upToDateTitle: string;
  readonly upToDateMessage: (version: string) => string;
  readonly updateAvailableTitle: string;
  readonly updateAvailableMessage: (version: string | null) => string;
  readonly updateAvailableDetail: (currentVersion: string) => string;
  readonly download: string;
  readonly later: string;
  readonly updateDownloadingTitle: string;
  readonly updateDownloadingMessage: (version: string | null) => string;
  readonly updateReadyTitle: string;
  readonly updateReadyMessage: (version: string | null) => string;
  readonly updateReadyDetail: string;
  readonly restart: string;
  readonly updateCheckFailedTitle: string;
  readonly updateCheckFailedMessage: string;
  readonly unknownUpdateError: string;
  readonly updatesUnavailableTitle: string;
  readonly updatesUnavailableMessage: string;
}

const describeUpdateEn = (version: string | null) =>
  version === null ? "A new version of T3 Code" : `T3 Code ${version}`;

const describeUpdateZhCn = (version: string | null) =>
  version === null ? "T3 Code 新版本" : `T3 Code ${version}`;

const messages = {
  en: {
    file: "File",
    edit: "Edit",
    view: "View",
    window: "Window",
    help: "Help",
    settings: "Settings...",
    checkForUpdates: "Check for Updates...",
    about: (appName) => `About ${appName}`,
    services: "Services",
    hide: (appName) => `Hide ${appName}`,
    hideOthers: "Hide Others",
    showAll: "Show All",
    open: (appName) => `Open ${appName}`,
    quit: (appName) => `Quit ${appName}`,
    closeWindow: "Close Window",
    undo: "Undo",
    redo: "Redo",
    cut: "Cut",
    copy: "Copy",
    paste: "Paste",
    pasteAndMatchStyle: "Paste and Match Style",
    pasteAsText: "Paste as Text",
    speech: "Speech",
    startSpeaking: "Start Speaking",
    stopSpeaking: "Stop Speaking",
    delete: "Delete",
    selectAll: "Select All",
    reload: "Reload",
    forceReload: "Force Reload",
    toggleDeveloperTools: "Toggle Developer Tools",
    toggleFullScreen: "Toggle Full Screen",
    minimize: "Minimize",
    zoomWindow: "Zoom",
    bringAllToFront: "Bring All to Front",
    actualSize: "Actual Size",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    ok: "OK",
    upToDateTitle: "You're up to date!",
    upToDateMessage: (version) => `T3 Code ${version} is currently the newest version available.`,
    updateAvailableTitle: "Update available",
    updateAvailableMessage: (version) => `${describeUpdateEn(version)} is available.`,
    updateAvailableDetail: (currentVersion) => `You're running T3 Code ${currentVersion}.`,
    download: "Download",
    later: "Later",
    updateDownloadingTitle: "Update downloading",
    updateDownloadingMessage: (version) => `${describeUpdateEn(version)} is already downloading.`,
    updateReadyTitle: "Update ready",
    updateReadyMessage: (version) => `${describeUpdateEn(version)} is ready to install.`,
    updateReadyDetail: "T3 Code will restart to install it. Any running tasks will be interrupted.",
    restart: "Restart",
    updateCheckFailedTitle: "Update check failed",
    updateCheckFailedMessage: "Could not check for updates.",
    unknownUpdateError: "An unknown error occurred. Please try again later.",
    updatesUnavailableTitle: "Updates unavailable",
    updatesUnavailableMessage: "Automatic updates are not available right now.",
  },
  "zh-CN": {
    file: "文件",
    edit: "编辑",
    view: "视图",
    window: "窗口",
    help: "帮助",
    settings: "设置...",
    checkForUpdates: "检查更新...",
    about: (appName) => `关于 ${appName}`,
    services: "服务",
    hide: (appName) => `隐藏 ${appName}`,
    hideOthers: "隐藏其他应用",
    showAll: "全部显示",
    open: (appName) => `打开 ${appName}`,
    quit: (appName) => `退出 ${appName}`,
    closeWindow: "关闭窗口",
    undo: "撤销",
    redo: "重做",
    cut: "剪切",
    copy: "复制",
    paste: "粘贴",
    pasteAndMatchStyle: "粘贴并匹配样式",
    pasteAsText: "粘贴为纯文本",
    speech: "语音",
    startSpeaking: "开始朗读",
    stopSpeaking: "停止朗读",
    delete: "删除",
    selectAll: "全选",
    reload: "重新加载",
    forceReload: "强制重新加载",
    toggleDeveloperTools: "切换开发者工具",
    toggleFullScreen: "切换全屏",
    minimize: "最小化",
    zoomWindow: "缩放",
    bringAllToFront: "全部置于最前",
    actualSize: "实际大小",
    zoomIn: "放大",
    zoomOut: "缩小",
    ok: "确定",
    upToDateTitle: "已是最新版本",
    upToDateMessage: (version) => `T3 Code ${version} 当前已是最新版本。`,
    updateAvailableTitle: "发现新版本",
    updateAvailableMessage: (version) => `${describeUpdateZhCn(version)} 现已可用。`,
    updateAvailableDetail: (currentVersion) => `当前运行版本为 T3 Code ${currentVersion}。`,
    download: "下载",
    later: "稍后",
    updateDownloadingTitle: "正在下载更新",
    updateDownloadingMessage: (version) => `${describeUpdateZhCn(version)} 正在下载中。`,
    updateReadyTitle: "更新已就绪",
    updateReadyMessage: (version) => `${describeUpdateZhCn(version)} 已准备好安装。`,
    updateReadyDetail: "T3 Code 将重启以完成安装，所有正在运行的任务都会中断。",
    restart: "重启",
    updateCheckFailedTitle: "检查更新失败",
    updateCheckFailedMessage: "无法检查更新。",
    unknownUpdateError: "发生未知错误，请稍后重试。",
    updatesUnavailableTitle: "暂时无法更新",
    updatesUnavailableMessage: "目前无法使用自动更新。",
  },
} satisfies Record<ResolvedAppLocale, DesktopApplicationMenuMessages>;

export function resolveDesktopApplicationMenuMessages(
  preference: AppLocalePreference,
  runtimeLocales: ReadonlyArray<string>,
): DesktopApplicationMenuMessages {
  return messages[resolveAppLocale(preference, runtimeLocales)];
}
