import { ManagedRelay, relayRequestFailureDetail } from "@t3tools/client-runtime/relay";
import * as Schema from "effect/Schema";

import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { translateWebSource } from "../i18n/messages";

const isRequestFailed = Schema.is(ManagedRelay.ManagedRelayRequestFailedError);
const isRequestTimeout = Schema.is(ManagedRelay.ManagedRelayRequestTimeoutError);

const DPOP_HINT_REPLACEMENTS: ReadonlyArray<readonly [source: string, zh: string]> = [
  [
    "Hint: Check that automatic date and time is enabled on both devices, then try again.",
    "提示：请确认两台设备均已开启自动日期与时间，然后重试。",
  ],
  [
    "Hint: Try again. If it still fails, clock skew may be the cause; check that automatic date and time is enabled on both devices.",
    "提示：请重试。若仍失败，可能是系统时间偏差所致，请确认两台设备均已开启自动日期与时间。",
  ],
  [
    "Hint: Try again. If the problem continues, copy the trace ID.",
    "提示：请重试。如果问题持续出现，请复制追踪 ID。",
  ],
];

/** Localize relay and connection status/error strings, including dynamic interpolated forms. */
export function localizeRelayErrorMessage(locale: ResolvedAppLocale, message: string): string {
  if (locale !== "zh-CN") return message;

  const translated = translateWebSource(locale, message);
  if (translated !== message) return translated;

  for (const [hintSource, hintZh] of DPOP_HINT_REPLACEMENTS) {
    const suffix = ` ${hintSource}`;
    if (message.endsWith(suffix)) {
      const base = message.slice(0, -suffix.length);
      return `${localizeRelayErrorMessage(locale, base)} ${hintZh}`;
    }
  }

  let match = /^Failed to connect\. Reconnecting\.\.\. Reason: (.+)$/s.exec(message);
  if (match) {
    return `连接失败，正在重新连接… 原因：${localizeRelayErrorMessage(locale, match[1]!)}`;
  }

  match = /^Connection failed\. Reason: (.+)$/s.exec(message);
  if (match) {
    return `连接失败。原因：${localizeRelayErrorMessage(locale, match[1]!)}`;
  }

  match = /^Relay returned an unexpected HTTP (\d+)\.$/.exec(message);
  if (match) {
    return `中继服务返回了意外的 HTTP ${match[1]}。`;
  }

  match = /^Relay rejected the environment link proof \((.+)\)\.$/.exec(message);
  if (match) {
    return `中继服务拒绝了运行设备关联凭证（${match[1]}）。`;
  }

  match = /^Relay rejected the environment connection request \((.+)\)\.$/.exec(message);
  if (match) {
    return `中继服务拒绝了运行设备连接请求（${match[1]}）。`;
  }

  match = /^Relay could not reach the environment endpoint \((.+)\)\.$/.exec(message);
  if (match) {
    return `中继服务无法访问该运行设备端点（${match[1]}）。`;
  }

  match = /^Relay could not link the environment \((.+)\)\.$/.exec(message);
  if (match) {
    return `中继服务无法关联该运行设备（${match[1]}）。`;
  }

  match =
    /^Relay cannot provision the managed endpoint \((.+?)\)\.(?: Failed stage: (.+)\.)?$/.exec(
      message,
    );
  if (match) {
    return `中继服务无法配置托管远程端点（${match[1]}）。${
      match[2] ? `失败阶段：${match[2]}。` : ""
    }`;
  }

  match =
    /^Relay refused the link: this account already has its maximum of (\d+) managed tunnels\. Unlink an environment, or link a paid T3 Chat account in your T3 Connect account settings on web or desktop\. Pro raises the default limit to (\d+) and Premier to (\d+)\.$/.exec(
      message,
    );
  if (match) {
    return `中继服务拒绝关联：此账号已达到 ${match[1]} 条远程连接通道上限。请先断开一台运行设备，或在网页端或桌面端的 T3 Connect 账号设置中绑定付费 T3 Chat 账号。Pro 可将默认上限提升至 ${match[2]} 条，Premier 可提升至 ${match[3]} 条。`;
  }

  match =
    /^Relay refused the link: this account already has its maximum of (\d+) managed tunnels\. Unlink an environment to free one up\.$/.exec(
      message,
    );
  if (match) {
    return `中继服务拒绝关联：此账号已达到 ${match[1]} 条远程连接通道上限。请先断开一台运行设备以释放名额。`;
  }

  match = /^Relay rejected the agent activity publish proof \((.+)\)\.$/.exec(message);
  if (match) {
    return `中继服务拒绝了智能体动态推送凭证（${match[1]}）。`;
  }

  match = /^Relay encountered an internal error \((.+)\)\.$/.exec(message);
  if (match) {
    return `中继服务发生内部错误（${match[1]}）。`;
  }

  return message;
}

/** One short line for an error toast saying why a T3 Connect request failed. */
export function relayFailureReason(
  cause: unknown,
  locale: ResolvedAppLocale = "en",
): string | null {
  for (let current = cause, depth = 0; current instanceof Error && depth < 4; depth += 1) {
    if (isRequestTimeout(current)) {
      return translateWebSource(locale, "T3 Connect timed out. Try again.");
    }
    if (isRequestFailed(current)) {
      if (current.transportFailed) {
        return translateWebSource(locale, "Could not reach T3 Connect. Check your network.");
      }
      if (current.relayError) {
        return current.relayError._tag === "RelayInternalError"
          ? translateWebSource(locale, "T3 Connect is unavailable. Try again.")
          : localizeRelayErrorMessage(locale, relayRequestFailureDetail(current) ?? "");
      }
      if (current.status === 504) {
        return translateWebSource(locale, "T3 Connect timed out. Try again.");
      }
      if ((current.status ?? 0) >= 500) {
        return translateWebSource(locale, "T3 Connect is unavailable. Try again.");
      }
      const detail = relayRequestFailureDetail(current);
      return detail ? localizeRelayErrorMessage(locale, detail) : null;
    }
    current = current.cause;
  }
  return null;
}
