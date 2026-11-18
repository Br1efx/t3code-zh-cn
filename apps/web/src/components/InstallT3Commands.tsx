import { useI18n } from "~/i18n/WebI18nContext";
import { translateWebSource } from "~/i18n/messages";
import { localizeWebString } from "~/i18n/localizeWebChildren";
import { cn } from "~/lib/utils";

import { CommandBlock } from "./CommandBlock";

/**
 * Setup steps for another computer: install `t3`, then run `command`. Both installers are shown
 * because the browser showing this is often not the computer being set up.
 */
export function InstallT3Commands({
  command,
  className,
}: {
  readonly command: string;
  readonly className?: string;
}) {
  const { locale: i18nLocale } = useI18n();
  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-xs text-muted-foreground">
        {translateWebSource(i18nLocale, "macOS, Linux")}
      </p>
      <CommandBlock command="curl -fsSL https://t3.codes/install.sh | sh" />
      <p className="text-xs text-muted-foreground">
        {translateWebSource(i18nLocale, "Windows (PowerShell)")}
      </p>
      <CommandBlock command="irm https://t3.codes/install.ps1 | iex" />
      <p className="text-xs text-muted-foreground">{translateWebSource(i18nLocale, "Then")}</p>
      <CommandBlock command={command} />
      <p className="text-xs text-muted-foreground">
        {localizeWebString(i18nLocale, "Skip the install if you already have ")}
        <code className="font-mono">t3</code>
        {translateWebSource(i18nLocale, ". If")} <code className="font-mono">t3</code>
        {localizeWebString(
          i18nLocale,
          " is not found after installing, add the folder the installer names to your PATH.",
        )}
      </p>
    </div>
  );
}
