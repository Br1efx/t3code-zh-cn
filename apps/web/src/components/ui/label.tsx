import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { localizeWebChildren } from "~/i18n/localizeWebChildren";
import { useI18n } from "~/i18n/WebI18nContext";
import { cn } from "~/lib/utils";

function Label({ className, children, render, ...props }: useRender.ComponentProps<"label">) {
  const { locale } = useI18n();
  const defaultProps = {
    className: cn(
      "inline-flex items-center gap-2 text-base/4.5 sm:text-sm/4 font-medium text-foreground",
      className,
    ),
    "data-slot": "label",
  };

  return useRender({
    defaultTagName: "label",
    props: mergeProps<"label">(defaultProps, {
      ...props,
      children: localizeWebChildren(locale, children),
    }),
    render,
  });
}

export { Label };
