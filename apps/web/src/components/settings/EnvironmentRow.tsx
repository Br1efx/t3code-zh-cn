import {
  type ConnectionTarget,
  connectionRouteId,
  connectionRouteLabel,
  connectionRoutes,
} from "@t3tools/client-runtime/connection";
import type { DesktopSshEnvironmentTarget, EnvironmentMachineKind } from "@t3tools/contracts";
import * as Option from "effect/Option";
import type { ReactNode } from "react";

import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { translateWebSource } from "~/i18n/messages";
import { useI18n } from "~/i18n/WebI18nContext";
import { cn } from "~/lib/utils";
import type { EnvironmentPresentation } from "~/state/environments";
import { usePreparedConnection } from "~/state/session";
import { isDesktopLocalConnectionTarget } from "~/connection/desktopLocal";
import { EnvironmentMachineIcon } from "../EnvironmentMachineIcon";

export function formatDesktopSshTarget(target: DesktopSshEnvironmentTarget): string {
  const authority = target.username ? `${target.username}@${target.hostname}` : target.hostname;
  return target.port ? `${authority}:${target.port}` : authority;
}

export function environmentTransportLabel(
  environment: EnvironmentPresentation,
  activeTarget: ConnectionTarget | null = null,
  locale: ResolvedAppLocale = "en",
): string {
  const { entry } = environment;
  if (entry.target._tag === "PrimaryConnectionTarget") {
    return translateWebSource(locale, "This machine");
  }
  const routes = connectionRoutes(entry);
  if (routes.length > 1) {
    const active =
      activeTarget === null
        ? undefined
        : routes.find(
            (route) => connectionRouteId(route.target) === connectionRouteId(activeTarget),
          );
    if (active === undefined) {
      return translateWebSource(locale, connectionRouteLabel(routes[0]!));
    }
    const routeLabel = translateWebSource(locale, connectionRouteLabel(active));
    return locale === "zh-CN" ? `通过 ${routeLabel}` : `via ${routeLabel}`;
  }
  if (environment.relayManaged) return "T3 Connect";
  if (isDesktopLocalConnectionTarget(entry.target)) return "WSL";
  if (
    entry.target._tag === "SshConnectionTarget" &&
    Option.isSome(entry.profile) &&
    entry.profile.value._tag === "SshConnectionProfile"
  ) {
    return `SSH ${formatDesktopSshTarget(entry.profile.value.target)}`;
  }
  return environment.displayUrl ?? translateWebSource(locale, "Remote link");
}

export function useEnvironmentTransportLabel(environment: EnvironmentPresentation): string {
  const { locale } = useI18n();
  const prepared = usePreparedConnection(environment.environmentId);
  return environmentTransportLabel(
    environment,
    environment.connection.phase === "connected" && prepared._tag === "Some"
      ? prepared.value.target
      : null,
    locale,
  );
}

export function EnvironmentTransportLabel(props: {
  readonly environment: EnvironmentPresentation;
}) {
  return useEnvironmentTransportLabel(props.environment);
}

export function EnvironmentRow({
  kind,
  label,
  subtitle,
  below,
  detail,
  dimmed = false,
  className,
  children,
}: {
  readonly kind: EnvironmentMachineKind;
  readonly label: string;
  readonly subtitle: ReactNode;
  readonly below?: ReactNode;
  readonly detail?: ReactNode;
  readonly dimmed?: boolean;
  readonly className?: string;
  readonly children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 px-3 py-2.5 sm:px-4",
        className,
      )}
    >
      {/* Dim only identity so switched-off controls remain readable and distinct from disabled controls. */}
      <EnvironmentMachineIcon
        aria-hidden
        kind={kind}
        className={cn("size-4 text-muted-foreground", dimmed && "opacity-60")}
      />
      <div className={cn("min-w-0", dimmed && "opacity-60")}>
        <p className="truncate text-sm font-medium text-foreground">{label}</p>
        <div className="truncate text-xs text-muted-foreground">{subtitle}</div>
        {below}
      </div>
      <div className="flex shrink-0 items-center gap-1">{children}</div>
      {detail ? <div className="col-span-2 col-start-2 min-w-0">{detail}</div> : null}
    </div>
  );
}
