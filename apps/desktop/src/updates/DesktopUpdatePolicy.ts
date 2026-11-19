/**
 * DesktopUpdatePolicy - what the administrator's managed policy allows the desktop updater to do.
 * The desktop reads the policy file itself, before any backend runs, and fails closed: a policy it
 * cannot read turns updates off.
 *
 * @module DesktopUpdatePolicy
 */
import {
  managedUpdatesMessage,
  type ManagedPolicyDocument,
  type ManagedUpdatesMode,
} from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

import * as DesktopManagedPolicy from "../app/DesktopManagedPolicy.ts";
import * as DesktopObservability from "../app/DesktopObservability.ts";
import {
  isZhCn,
  resolveCurrentDesktopLocale,
  type ResolvedAppLocale,
} from "../i18n/DesktopLocale.ts";

export interface UpdatePolicy {
  readonly mode: ManagedUpdatesMode;
  readonly feedUrl: string | undefined;
  readonly allowNightly: boolean;
  /** Why the updater is restricted, shown in place of update actions; `null` when unmanaged. */
  readonly message: string | null;
}

export class DesktopUpdatePolicy extends Context.Service<DesktopUpdatePolicy, UpdatePolicy>()(
  "@t3tools/desktop/updates/DesktopUpdatePolicy",
) {}

export const unmanagedUpdatePolicy: UpdatePolicy = {
  mode: "auto",
  feedUrl: undefined,
  allowNightly: true,
  message: null,
};

export function localizeManagedUpdatePolicyMessage(
  message: string | null,
  locale: ResolvedAppLocale,
): string | null {
  if (message === null || !isZhCn(locale)) {
    return message;
  }
  const managedMatch = /^(.+) manages T3 Code updates\.$/.exec(message);
  if (managedMatch?.[1]) {
    return `T3 Code 的更新由 ${managedMatch[1]} 统一管理。`;
  }
  const nightlyDeniedMatch =
    /^(.+) manages T3 Code updates\. Only stable releases can be installed\.$/.exec(message);
  if (nightlyDeniedMatch?.[1]) {
    return `T3 Code 的更新由 ${nightlyDeniedMatch[1]} 统一管理，仅允许安装稳定版本。`;
  }
  const brokenPolicyMatch =
    /^Updates are off because T3 Code cannot use the managed policy at (.+)\. Contact your administrator\.$/.exec(
      message,
    );
  if (brokenPolicyMatch?.[1]) {
    return `无法读取管理员策略文件（${brokenPolicyMatch[1]}），自动更新已暂停。请联系你的管理员。`;
  }
  return message;
}

function resolveUpdatePolicy(
  document: ManagedPolicyDocument | undefined,
  locale: ResolvedAppLocale,
): UpdatePolicy {
  const updates = document?.limits?.updates;
  if (document === undefined || updates === undefined) return unmanagedUpdatePolicy;
  return {
    mode: updates.mode,
    feedUrl: updates.feedUrl,
    allowNightly: updates.allowNightly ?? true,
    message: isZhCn(locale)
      ? `T3 Code 的更新由 ${document.organization} 统一管理。`
      : managedUpdatesMessage(document.organization),
  };
}

const { logInfo, logError } = DesktopObservability.makeComponentLogger("desktop-update-policy");

const make = Effect.gen(function* () {
  const locale = yield* resolveCurrentDesktopLocale;
  return yield* (yield* DesktopManagedPolicy.DesktopManagedPolicy).read.pipe(
    Effect.map((found) => ({
      source: found?.source,
      policy: resolveUpdatePolicy(found?.document, locale),
    })),
    Effect.tap(({ source, policy }) =>
      policy.message === null
        ? Effect.void
        : logInfo("managed policy restricts updates", {
            source,
            mode: policy.mode,
            customFeed: policy.feedUrl !== undefined,
            allowNightly: policy.allowNightly,
          }),
    ),
    Effect.map(({ policy }) => policy),
    Effect.catchTags({
      ManagedPolicyFileError: (error) =>
        logError("updates are off because the managed policy cannot be used", {
          path: error.path,
          reason: error.reason,
        }).pipe(
          Effect.as<UpdatePolicy>({
            mode: "off",
            feedUrl: undefined,
            allowNightly: false,
            message: isZhCn(locale)
              ? `无法读取管理员策略文件（${error.path}），自动更新已暂停。请联系你的管理员。`
              : `Updates are off because T3 Code cannot use the managed policy at ${error.path}. Contact your administrator.`,
          }),
        ),
    }),
  );
});

export const layer = Layer.effect(DesktopUpdatePolicy, make);

export const layerTest = (policy: UpdatePolicy = unmanagedUpdatePolicy) =>
  Layer.succeed(DesktopUpdatePolicy, policy);
