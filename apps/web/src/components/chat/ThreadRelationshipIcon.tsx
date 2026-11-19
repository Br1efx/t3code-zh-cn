import type { ProviderDriverKind, ServerProvider } from "@t3tools/contracts";
import { BotIcon, type LucideIcon } from "lucide-react";
import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { cn } from "../../lib/utils";
import {
  hasInstanceBadge,
  shouldShowInstanceBadge,
  type ProviderInstanceEntry,
} from "../../providerInstances";
import { ProviderInstanceIcon } from "./ProviderInstanceIcon";

export function threadRelationshipStatusLabel(
  status: string | null,
  locale?: ResolvedAppLocale,
): string {
  const zh = locale === "zh-CN";
  switch (status) {
    case "preparing":
    case "starting":
      return zh ? "启动中" : "Starting";
    case "running":
    case "in_progress":
      return zh ? "运行中" : "Running";
    case "pending":
    case "queued":
      return zh ? "排队中" : "Queued";
    case "waiting":
    case "blocked":
      return zh ? "等待中" : "Waiting";
    case "completed":
      return zh ? "已完成" : "Done";
    case "failed":
    case "error":
      return zh ? "失败" : "Failed";
    case "cancelled":
    case "interrupted":
      return zh ? "已停止" : "Stopped";
    case "rolled_back":
      return zh ? "已回退" : "Reverted";
    case "resolved_native":
      return zh ? "已处理（原生）" : "Resolved (native)";
    case "resolved_portable":
      return zh ? "已处理（兼容）" : "Resolved (portable)";
    case "consumed":
      return zh ? "已消费" : "Consumed";
    case "superseded":
      return zh ? "已被替代" : "Superseded";
    case "idle":
      return zh ? "空闲" : "Idle";
    default:
      return zh ? "未知" : "Unknown";
  }
}

export function ThreadRelationshipIcon({
  driver,
  provider,
  providerEntries = [],
  anyInstanceBadge = hasInstanceBadge(providerEntries),
  status,
  fallbackIcon: FallbackIcon = BotIcon,
}: {
  driver?: ProviderDriverKind | undefined;
  provider?: ServerProvider | undefined;
  providerEntries?: ReadonlyArray<ProviderInstanceEntry>;
  /** For rows that can't take `providerEntries` but sit in the same list as rows that do. */
  anyInstanceBadge?: boolean;
  status: string | null;
  fallbackIcon?: LucideIcon;
}) {
  const iconClassName = "size-4 shrink-0 text-muted-foreground";
  const entry = driver
    ? providerEntries.find((candidate) => candidate.instanceId === provider?.instanceId)
    : undefined;
  const showInstanceBadge = entry !== undefined && shouldShowInstanceBadge(entry, providerEntries);
  return (
    <span className="relative inline-flex size-4 shrink-0 items-center justify-center">
      {driver ? (
        <ProviderInstanceIcon
          driverKind={driver}
          displayName={entry?.displayName ?? provider?.displayName ?? driver}
          accentColor={entry?.accentColor}
          acpRegistryAgentId={entry?.acpRegistryAgentId}
          acpRegistryIconUrl={entry?.acpRegistryIconUrl ?? provider?.iconUrl}
          showBadge={showInstanceBadge}
          size="compact"
          iconClassName={iconClassName}
          className="z-auto"
        />
      ) : (
        <FallbackIcon className={iconClassName} />
      )}
      <span
        className={cn(
          "absolute -right-1 size-2 rounded-full border-2 border-card",
          anyInstanceBadge ? "-top-1" : "-bottom-1",
          status === "running" ||
            status === "in_progress" ||
            status === "pending" ||
            status === "waiting"
            ? "bg-info"
            : status === "failed" || status === "error"
              ? "bg-destructive"
              : status === "completed"
                ? "bg-success"
                : "bg-muted-foreground/45",
        )}
        aria-hidden="true"
      />
    </span>
  );
}
