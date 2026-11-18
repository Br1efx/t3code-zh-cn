import type { RelayClientDeviceRecord } from "@t3tools/contracts/relay";
import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";

const mobileClientUpdatedAtFormatters = {
  en: new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }),
  "zh-CN": new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "medium",
    timeStyle: "short",
  }),
};

const NOTIFICATION_PREFERENCES = [
  ["notifyOnApproval", "approvals", "待批准"],
  ["notifyOnInput", "input requests", "待回复"],
  ["notifyOnCompletion", "completions", "任务完成"],
  ["notifyOnFailure", "failures", "运行出错"],
] as const satisfies ReadonlyArray<
  readonly [keyof RelayClientDeviceRecord["notifications"], string, string]
>;

export function mobileClientPlatformLabel(device: RelayClientDeviceRecord): string {
  const platform =
    device.platform === "android"
      ? "Android"
      : device.iosMajorVersion === null
        ? "iOS"
        : `iOS ${device.iosMajorVersion}`;
  return `${platform}${device.appVersion ? ` · T3 Code ${device.appVersion}` : ""}`;
}

export function mobileClientNotificationDetail(
  device: RelayClientDeviceRecord,
  locale: ResolvedAppLocale = "en",
): string {
  if (!device.notifications.enabled) {
    return locale === "zh-CN"
      ? "此设备已关闭推送通知。"
      : "Push notifications are disabled on this device.";
  }

  const enabledPreferences = NOTIFICATION_PREFERENCES.flatMap(([preference, enLabel, zhLabel]) =>
    device.notifications[preference] ? [locale === "zh-CN" ? zhLabel : enLabel] : [],
  );
  if (enabledPreferences.length > 0) {
    return locale === "zh-CN"
      ? `已开启提醒类型：${enabledPreferences.join("、")}。`
      : `Alerts enabled for ${enabledPreferences.join(", ")}.`;
  }
  return locale === "zh-CN"
    ? "已开启推送通知，但尚未勾选任何提醒类型。"
    : "Push notifications are enabled, but no alert types are selected.";
}

export function mobileClientUpdatedAtLabel(
  updatedAt: string,
  locale: ResolvedAppLocale = "en",
): string {
  const date = new Date(updatedAt);
  if (Number.isNaN(date.getTime())) {
    return locale === "zh-CN" ? "更新时间未知" : "Update time unavailable";
  }
  const formatted = mobileClientUpdatedAtFormatters[locale].format(date);
  return locale === "zh-CN" ? `更新于 ${formatted}` : `Updated ${formatted}`;
}
