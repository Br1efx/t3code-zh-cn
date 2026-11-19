import { mergeProps } from "@base-ui/react/merge-props";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { useRender } from "@base-ui/react/use-render";
import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import type { ReactNode } from "react";

import {
  localizeOptionalWebAttr,
  localizeWebChildren,
  localizeWebString,
} from "~/i18n/localizeWebChildren";
import { useI18n } from "~/i18n/WebI18nContext";
import { cn } from "~/lib/utils";

function localizeSelectItems<Value, Multiple extends boolean | undefined>(
  locale: ResolvedAppLocale,
  items: SelectPrimitive.Root.Props<Value, Multiple>["items"],
): SelectPrimitive.Root.Props<Value, Multiple>["items"] {
  if (locale === "en" || items === undefined) {
    return items;
  }
  if (Array.isArray(items)) {
    return items.map((entry) => {
      if (entry && typeof entry === "object") {
        if ("items" in entry && Array.isArray(entry.items)) {
          return {
            ...entry,
            items: entry.items.map((item: unknown) =>
              item && typeof item === "object" && "label" in item
                ? { ...item, label: localizeWebChildren(locale, item.label as ReactNode) }
                : item,
            ),
          };
        }
        if ("label" in entry) {
          return {
            ...entry,
            label: localizeWebChildren(locale, entry.label),
          };
        }
      }
      return entry;
    }) as SelectPrimitive.Root.Props<Value, Multiple>["items"];
  }
  const localizedRecord: Record<string, ReactNode> = {};
  for (const [key, label] of Object.entries(items)) {
    localizedRecord[key] = localizeWebChildren(locale, label);
  }
  return localizedRecord;
}

function Select<Value, Multiple extends boolean | undefined = false>({
  items,
  itemToStringLabel,
  ...props
}: SelectPrimitive.Root.Props<Value, Multiple>) {
  const { locale } = useI18n();
  const localizedItems = localizeSelectItems(locale, items);
  const localizedItemToStringLabel =
    !itemToStringLabel || locale === "en"
      ? itemToStringLabel
      : (itemValue: Value) => localizeWebString(locale, itemToStringLabel(itemValue));

  return (
    <SelectPrimitive.Root
      {...props}
      {...(localizedItems !== undefined ? { items: localizedItems } : {})}
      {...(localizedItemToStringLabel !== undefined
        ? { itemToStringLabel: localizedItemToStringLabel }
        : {})}
    />
  );
}

const selectTriggerVariants = cva(
  "relative inline-flex cursor-pointer select-none items-center justify-between gap-2 border rounded-lg text-left text-base outline-none transition-[color,box-shadow,background-color] data-disabled:pointer-events-none data-disabled:opacity-64 sm:text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      variant: {
        default:
          "w-full min-w-36 border-input bg-background not-dark:bg-clip-padding text-foreground shadow-xs/5 ring-ring/24 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-data-disabled:not-focus-visible:not-aria-invalid:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-inset aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:ring-destructive/16 dark:bg-input/32 dark:aria-invalid:ring-destructive/24 dark:not-data-disabled:not-focus-visible:not-aria-invalid:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/6%)] [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='text-'])]:text-icon-muted [[data-disabled],:focus-visible,[aria-invalid],[data-pressed]]:shadow-none",
        ghost:
          "border-transparent text-secondary-label focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring data-pressed:bg-accent [:hover,[data-pressed]]:bg-accent [:hover,[data-pressed]]:text-foreground",
      },
      size: {
        compact:
          "h-7 gap-1 rounded-md px-[calc(--spacing(2)-1px)] text-xs before:rounded-[calc(var(--radius-md)-1px)] [&_svg:not([class*='size-'])]:size-3.5",
        default: "min-h-9 px-[calc(--spacing(3)-1px)] sm:min-h-8",
        lg: "min-h-10 px-[calc(--spacing(3)-1px)] sm:min-h-9",
        sm: "min-h-8 gap-1.5 px-[calc(--spacing(2.5)-1px)] sm:min-h-7",
        xs: "h-7 gap-1 rounded-md px-[calc(--spacing(2)-1px)] text-sm before:rounded-[calc(var(--radius-md)-1px)] sm:h-6 sm:text-xs [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5",
      },
    },
  },
);

function SelectTrigger({
  className,
  size = "default",
  variant = "default",
  children,
  icon,
  ...props
}: SelectPrimitive.Trigger.Props &
  VariantProps<typeof selectTriggerVariants> & { icon?: ReactNode }) {
  const { locale } = useI18n();
  return (
    <SelectPrimitive.Trigger
      className={cn(selectTriggerVariants({ size, variant }), className)}
      data-slot="select-trigger"
      {...props}
      aria-label={localizeOptionalWebAttr(locale, props["aria-label"])}
      title={localizeOptionalWebAttr(locale, props.title)}
    >
      {children}
      <SelectPrimitive.Icon data-slot="select-icon">
        {icon ?? <ChevronDownIcon className="-me-1 size-3.5 opacity-70" />}
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectButton({
  className,
  size = "default",
  children,
  render,
  ...props
}: useRender.ComponentProps<"button"> & Pick<VariantProps<typeof selectTriggerVariants>, "size">) {
  const { locale } = useI18n();
  const defaultProps = {
    className: cn(selectTriggerVariants({ size }), className),
    "data-slot": "select-trigger",
    type: render ? undefined : ("button" as const),
  };
  return useRender({
    defaultTagName: "button",
    props: {
      ...mergeProps<"button">(defaultProps, {
        ...props,
        "aria-label": localizeOptionalWebAttr(locale, props["aria-label"]),
        title: localizeOptionalWebAttr(locale, props.title),
      }),
      children: (
        <>
          <span className="min-w-0 flex-1 truncate text-left">
            {localizeWebChildren(locale, children)}
          </span>
          <ChevronDownIcon aria-hidden className="-me-1 size-3.5 shrink-0 opacity-70" />
        </>
      ),
    },
    render,
  });
}

function SelectValue({ className, placeholder, children, ...props }: SelectPrimitive.Value.Props) {
  const { locale } = useI18n();
  return (
    <SelectPrimitive.Value
      className={cn("flex-1 truncate data-placeholder:text-placeholder", className)}
      data-slot="select-value"
      placeholder={localizeWebChildren(locale, placeholder)}
      {...props}
    >
      {typeof children === "function"
        ? (value) => localizeWebChildren(locale, children(value))
        : localizeWebChildren(locale, children)}
    </SelectPrimitive.Value>
  );
}

function SelectPopup({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  alignItemWithTrigger = true,
  matchTriggerWidth = true,
  anchor,
  ...props
}: SelectPrimitive.Popup.Props & {
  side?: SelectPrimitive.Positioner.Props["side"];
  sideOffset?: SelectPrimitive.Positioner.Props["sideOffset"];
  align?: SelectPrimitive.Positioner.Props["align"];
  alignOffset?: SelectPrimitive.Positioner.Props["alignOffset"];
  alignItemWithTrigger?: SelectPrimitive.Positioner.Props["alignItemWithTrigger"];
  matchTriggerWidth?: boolean;
  anchor?: SelectPrimitive.Positioner.Props["anchor"];
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        align={align}
        alignItemWithTrigger={alignItemWithTrigger}
        alignOffset={alignOffset}
        anchor={anchor}
        className="z-[130] select-none"
        data-slot="select-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <SelectPrimitive.Popup
          // Electron drag hit-testing ignores z-index; items over a drag region would swallow clicks.
          className="origin-(--transform-origin) rounded-lg text-foreground outline-none [-webkit-app-region:no-drag]"
          data-slot="select-popup"
          {...props}
        >
          <SelectPrimitive.ScrollUpArrow
            className="top-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:top-px before:h-[200%] before:rounded-t-[calc(var(--radius-lg)-1px)] before:bg-linear-to-b before:from-50% before:from-popover"
            data-slot="select-scroll-up-arrow"
          >
            <ChevronUpIcon className="relative size-4.5 sm:size-4" />
          </SelectPrimitive.ScrollUpArrow>
          <div
            className={cn(
              "dropdown-glass relative h-full rounded-lg shadow-[0_16px_40px_-18px_rgb(0_0_0/55%)] dark:shadow-[0_18px_44px_-18px_rgb(0_0_0/80%)]",
              matchTriggerWidth && "min-w-(--anchor-width)",
            )}
          >
            <SelectPrimitive.List
              className={cn("max-h-(--available-height) overflow-y-auto p-1", className)}
              data-slot="select-list"
            >
              {children}
            </SelectPrimitive.List>
          </div>
          <SelectPrimitive.ScrollDownArrow
            className="bottom-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:bottom-px before:h-[200%] before:rounded-b-[calc(var(--radius-lg)-1px)] before:bg-linear-to-t before:from-50% before:from-popover"
            data-slot="select-scroll-down-arrow"
          >
            <ChevronDownIcon className="relative size-4.5 sm:size-4" />
          </SelectPrimitive.ScrollDownArrow>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({
  className,
  children,
  hideIndicator: _hideIndicator = false,
  ...props
}: SelectPrimitive.Item.Props & {
  hideIndicator?: boolean;
}) {
  const { locale } = useI18n();
  return (
    <SelectPrimitive.Item
      className={cn(
        "flex min-h-8 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-pointer items-center rounded-sm px-2 py-1 text-base outline-none data-selected:bg-foreground/[0.08] data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      data-slot="select-item"
      {...props}
    >
      <SelectPrimitive.ItemText
        className="min-w-0 flex-1 [&_svg:not([class*='text-'])]:text-muted-foreground"
        data-slot="select-item-text"
      >
        {localizeWebChildren(locale, children)}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectGroup(props: SelectPrimitive.Group.Props) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectGroupLabel({ children, ...props }: SelectPrimitive.GroupLabel.Props) {
  const { locale } = useI18n();
  return (
    <SelectPrimitive.GroupLabel
      className="px-2 py-1.5 font-medium text-muted-foreground text-xs"
      data-slot="select-group-label"
      {...props}
    >
      {localizeWebChildren(locale, children)}
    </SelectPrimitive.GroupLabel>
  );
}

export {
  Select,
  SelectTrigger,
  SelectButton,
  SelectValue,
  SelectPopup,
  SelectPopup as SelectContent,
  SelectItem,
  SelectGroup,
  SelectGroupLabel,
};
