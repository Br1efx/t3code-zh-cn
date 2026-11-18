import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { Children, cloneElement, Fragment, isValidElement, type ReactNode } from "react";

import { translateWebSource } from "./messages";

export function localizeWebString(locale: ResolvedAppLocale, value: string): string {
  if (locale === "en" || value.length === 0) return value;
  const trimmed = value.trim();
  if (trimmed.length === 0) return value;
  let translated = translateWebSource(locale, trimmed);
  if (translated === trimmed) {
    const collapsed = trimmed.replace(/\s+/g, " ");
    if (collapsed !== trimmed) {
      const collapsedTranslated = translateWebSource(locale, collapsed);
      if (collapsedTranslated !== collapsed) {
        translated = collapsedTranslated;
      }
    }
  }
  if (translated === trimmed) return value;
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

export function localizeOptionalWebAttr(
  locale: ResolvedAppLocale,
  value: string | undefined,
): string | undefined {
  if (locale === "en" || value === undefined) return value;
  return localizeWebString(locale, value);
}

export function localizeWebChildren<T>(locale: ResolvedAppLocale, children: T): T {
  if (
    locale === "en" ||
    children == null ||
    typeof children === "boolean" ||
    typeof children === "number" ||
    typeof children === "function"
  ) {
    return children;
  }

  if (typeof children === "string") {
    return localizeWebString(locale, children) as T;
  }

  if (isValidElement<{ children?: ReactNode }>(children) && children.type === Fragment) {
    const nextInner = localizeWebChildren(locale, children.props.children);
    if (nextInner === children.props.children) return children;
    return cloneElement(children, undefined, nextInner) as T;
  }

  if (!Array.isArray(children)) {
    return children;
  }

  let didChange = false;
  const localizedChildren: ReactNode[] = [];
  let textRun: Array<string | number> = [];

  const flushTextRun = () => {
    if (textRun.length === 0) return;
    if (textRun.length === 1 && typeof textRun[0] === "number") {
      localizedChildren.push(textRun[0]);
      textRun = [];
      return;
    }

    const combined = textRun.join("");
    const localizedCombined = localizeWebString(locale, combined);
    if (localizedCombined !== combined) {
      didChange = true;
      localizedChildren.push(localizedCombined);
    } else {
      for (const part of textRun) {
        if (typeof part === "string") {
          const localizedPart = localizeWebString(locale, part);
          if (localizedPart !== part) didChange = true;
          localizedChildren.push(localizedPart);
        } else {
          localizedChildren.push(part);
        }
      }
    }
    textRun = [];
  };

  Children.forEach(children as ReactNode, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      textRun.push(child);
      return;
    }
    if (child === null || typeof child === "boolean") return;
    flushTextRun();
    localizedChildren.push(child);
  });
  flushTextRun();

  if (!didChange) return children;
  return (localizedChildren.length === 1 ? localizedChildren[0] : localizedChildren) as T;
}
