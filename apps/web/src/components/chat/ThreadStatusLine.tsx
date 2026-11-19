import type { ReactNode } from "react";

import { localizeWebString } from "~/i18n/localizeWebChildren";
import { useI18n } from "~/i18n/WebI18nContext";
import { InlineButton } from "../ui/button";

export function ThreadStatusLine(props: {
  readonly icon: ReactNode;
  readonly label: string;
  readonly actionLabel: string;
  readonly actionDisabled?: boolean;
  readonly onAction: () => void;
  // Set for clock-dependent labels to trigger updates.
  readonly clockMinute?: string;
}) {
  const { locale } = useI18n();
  return (
    <div
      data-chat-thread-status-line="true"
      className="mx-auto flex w-full min-w-0 max-w-(--chat-content-max-width) items-center gap-1.5 px-1 pb-2 text-muted-foreground text-xs [&_svg]:size-3.5 [&_svg]:shrink-0"
    >
      {props.icon}
      <span className="min-w-0 truncate">{localizeWebString(locale, props.label)}</span>
      <span aria-hidden="true">·</span>
      <InlineButton disabled={props.actionDisabled} onClick={props.onAction}>
        {props.actionLabel}
      </InlineButton>
    </div>
  );
}
