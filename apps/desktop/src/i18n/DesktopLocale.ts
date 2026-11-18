import { DEFAULT_APP_LOCALE_PREFERENCE, type AppLocalePreference } from "@t3tools/contracts";
import { resolveAppLocale, type ResolvedAppLocale } from "@t3tools/shared/appLocale";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";

import * as ElectronApp from "../electron/ElectronApp.ts";
import * as DesktopClientSettings from "../settings/DesktopClientSettings.ts";

export type { ResolvedAppLocale };

export const DesktopResolvedLocaleSchema = Schema.Literals(["en", "zh-CN"]);

export const OptionalDesktopLocaleField = Schema.optional(DesktopResolvedLocaleSchema);

export function isZhCn(locale: ResolvedAppLocale | undefined): boolean {
  return locale === "zh-CN";
}

export function withDesktopLocale(locale: ResolvedAppLocale): { readonly locale?: "zh-CN" } {
  return locale === "zh-CN" ? { locale: "zh-CN" } : {};
}

export function resolveDesktopLocale(input: {
  readonly appLocale?: AppLocalePreference | undefined;
  readonly systemLocale?: string | undefined;
}): ResolvedAppLocale {
  return resolveAppLocale(
    input.appLocale ?? DEFAULT_APP_LOCALE_PREFERENCE,
    input.systemLocale ? [input.systemLocale] : [],
  );
}

const readLocaleFromServices = Effect.fn("DesktopLocale.readLocaleFromServices")(function* (
  clientSettings: DesktopClientSettings.DesktopClientSettings["Service"] | undefined,
  electronApp: ElectronApp.ElectronApp["Service"] | undefined,
): Effect.fn.Return<ResolvedAppLocale> {
  const appLocale: AppLocalePreference =
    clientSettings?.get === undefined
      ? "system"
      : Option.match(yield* clientSettings.get.pipe(Effect.catch(() => Effect.succeedNone)), {
          onNone: () => DEFAULT_APP_LOCALE_PREFERENCE,
          onSome: (value) => value.appLocale,
        });
  const systemLocale =
    electronApp?.systemLocale === undefined
      ? "en-US"
      : yield* electronApp.systemLocale.pipe(Effect.catchCause(() => Effect.succeed("en-US")));
  return resolveDesktopLocale({ appLocale, systemLocale });
});

export class DesktopLocale extends Context.Service<
  DesktopLocale,
  {
    readonly current: Effect.Effect<ResolvedAppLocale>;
  }
>()("@t3tools/desktop/i18n/DesktopLocale") {}

const make = Effect.gen(function* () {
  const clientSettings = yield* DesktopClientSettings.DesktopClientSettings;
  const electronApp = yield* ElectronApp.ElectronApp;

  return DesktopLocale.of({
    current: readLocaleFromServices(clientSettings, electronApp),
  });
});

export const layer = Layer.effect(DesktopLocale, make);

export const makeDesktopLocaleResolver: Effect.Effect<Effect.Effect<ResolvedAppLocale>> =
  Effect.gen(function* () {
    const desktopLocale = yield* Effect.serviceOption(DesktopLocale);
    if (Option.isSome(desktopLocale)) {
      return desktopLocale.value.current;
    }
    const clientSettings = yield* Effect.serviceOption(DesktopClientSettings.DesktopClientSettings);
    const electronApp = yield* Effect.serviceOption(ElectronApp.ElectronApp);
    return readLocaleFromServices(
      Option.getOrUndefined(clientSettings),
      Option.getOrUndefined(electronApp),
    );
  });

export const resolveCurrentDesktopLocale: Effect.Effect<ResolvedAppLocale> =
  Effect.flatten(makeDesktopLocaleResolver);
