import { T3CHAT_PLAN_TUNNEL_LIMITS, type RelayT3ChatLink } from "@t3tools/contracts/relay";
import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { MessageSquareIcon } from "lucide-react";
import type { ReactNode } from "react";

import { translateWebSource } from "~/i18n/messages";
import { useI18n } from "~/i18n/WebI18nContext";
import { useManagedTunnelUsage } from "../../cloud/managedRelayState";
import { T3CHAT_SUBSCRIPTION_URL, TunnelUsageMeter } from "../cloud/TunnelUsage";
import { Button } from "../ui/button";
import {
  ClerkUserProfilePage,
  ClerkUserProfileRefreshButton,
  ClerkUserProfileRow,
} from "./ClerkUserProfilePage";
import { useT3ChatLink } from "./useT3ChatLink";

function renderUpgradeLink(locale: ResolvedAppLocale) {
  return (
    <a
      className="underline"
      href={T3CHAT_SUBSCRIPTION_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {translateWebSource(locale, "Upgrade on T3 Chat")}
    </a>
  );
}

function planLabel(link: RelayT3ChatLink, locale: ResolvedAppLocale): ReactNode {
  const upgradeLink = renderUpgradeLink(locale);
  switch (link.plan) {
    case "premier":
      return locale === "zh-CN"
        ? `Premier · 最多支持 ${T3CHAT_PLAN_TUNNEL_LIMITS.premier} 条远程通道`
        : `Premier · up to ${T3CHAT_PLAN_TUNNEL_LIMITS.premier} tunnels`;
    case "pro":
      return locale === "zh-CN" ? (
        <>
          Pro · 最多支持 {T3CHAT_PLAN_TUNNEL_LIMITS.pro} 条远程通道。{upgradeLink} 至 Premier 可解锁{" "}
          {T3CHAT_PLAN_TUNNEL_LIMITS.premier} 条。
        </>
      ) : (
        <>
          Pro · up to {T3CHAT_PLAN_TUNNEL_LIMITS.pro} tunnels. {upgradeLink} to Premier for{" "}
          {T3CHAT_PLAN_TUNNEL_LIMITS.premier}.
        </>
      );
    case "free":
      return locale === "zh-CN" ? (
        <>{upgradeLink} 以获取更多远程通道</>
      ) : (
        <>{upgradeLink} for more tunnels</>
      );
  }
}

/** Links a T3 Chat account so paid subscribers get more tunnels. */
export function T3ChatUserProfilePage() {
  const { locale: translationLocale } = useI18n();
  const { linkState, pending, linkUrl, link: handleLink, unlink: handleUnlink } = useT3ChatLink();
  const usage = useManagedTunnelUsage();

  const data = linkState.data;
  const link = data?.link ?? null;

  return (
    <ClerkUserProfilePage
      title="T3 Chat"
      description={
        translationLocale === "zh-CN"
          ? `绑定付费 T3 Chat 账号以获取更多 T3 Connect 远程通道：Pro 最多 ${T3CHAT_PLAN_TUNNEL_LIMITS.pro} 条，Premier 最多 ${T3CHAT_PLAN_TUNNEL_LIMITS.premier} 条。`
          : `Link a paid T3 Chat account for more T3 Connect tunnels: up to ${T3CHAT_PLAN_TUNNEL_LIMITS.pro} with Pro, ${T3CHAT_PLAN_TUNNEL_LIMITS.premier} with Premier.`
      }
      action={
        <ClerkUserProfileRefreshButton
          disabled={pending !== null}
          isPending={linkState.isPending}
          onClick={usage.refresh}
        />
      }
    >
      {linkState.error ? (
        <div className="border-t py-3 text-xs" role="alert">
          <p className="font-medium text-destructive-foreground">
            {translateWebSource(translationLocale, "Could not load T3 Chat link")}
          </p>
          <p className="mt-0.5 text-muted-foreground">{linkState.error}</p>
        </div>
      ) : data === null ? null : !data.available ? (
        <p className="border-t py-4 text-xs text-muted-foreground">
          {translateWebSource(
            translationLocale,
            "This T3 Connect server does not support T3 Chat linking.",
          )}
        </p>
      ) : (
        <ul className="border-t">
          <ClerkUserProfileRow icon={<MessageSquareIcon className="size-4" />}>
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm leading-4.5 font-medium text-foreground">
                  {link ? link.email : translateWebSource(translationLocale, "Not linked")}
                </h3>
                <p className="mt-1 text-xs leading-4.5 text-muted-foreground">
                  {link ? (
                    planLabel(link, translationLocale)
                  ) : linkUrl ? (
                    translationLocale === "zh-CN" ? (
                      <>
                        请前往{" "}
                        <a
                          className="underline"
                          href={linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {translateWebSource(translationLocale, "t3.chat")}
                        </a>{" "}
                        确认绑定，完成后点击“刷新”。
                      </>
                    ) : (
                      <>
                        {translateWebSource(translationLocale, "Confirm on")}{" "}
                        <a
                          className="underline"
                          href={linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {translateWebSource(translationLocale, "t3.chat")}
                        </a>
                        {translateWebSource(translationLocale, ", then select Refresh.")}
                      </>
                    )
                  ) : (
                    translateWebSource(translationLocale, "You confirm the link on t3.chat.")
                  )}
                </p>
              </div>
              {link ? (
                <Button
                  size="sm"
                  variant="destructive-outline"
                  disabled={pending !== null}
                  onClick={() => void handleUnlink()}
                >
                  {pending === "unlink" ? "Unlinking…" : "Unlink"}
                </Button>
              ) : (
                <Button size="sm" disabled={pending !== null} onClick={() => void handleLink()}>
                  {pending === "link" ? "Opening…" : "Link T3 Chat"}
                </Button>
              )}
            </div>
          </ClerkUserProfileRow>
          {usage.used !== null && usage.limit !== null ? (
            <li className="border-t py-4">
              <TunnelUsageMeter used={usage.used} limit={usage.limit} />
            </li>
          ) : null}
        </ul>
      )}
    </ClerkUserProfilePage>
  );
}
