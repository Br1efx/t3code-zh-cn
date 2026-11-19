import { DEFAULT_CLIENT_SETTINGS } from "@t3tools/contracts";
import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vite-plus/test";

import { translateWebMessage } from "~/i18n/messages";
import { WebI18nContext } from "~/i18n/WebI18nContext";
import { resolveThreadDetailsVisibility, THREAD_DETAILS_ITEMS } from "../chat/threadDetailsItems";
import { ThreadDetailsItemsRow } from "./ThreadDetailsItemsRow";

function renderRow(locale: ResolvedAppLocale): string {
  return renderToStaticMarkup(
    <WebI18nContext.Provider
      value={{
        locale,
        appLocale: locale,
        setAppLocale: () => undefined,
        t: (key, values) => translateWebMessage(locale, key, values),
      }}
    >
      <ThreadDetailsItemsRow />
    </WebI18nContext.Provider>,
  );
}

describe("ThreadDetailsItemsRow", () => {
  const defaultVisibility = resolveThreadDetailsVisibility(DEFAULT_CLIENT_SETTINGS);
  const defaultEnabledCount = THREAD_DETAILS_ITEMS.filter(
    (item) => defaultVisibility[item.id],
  ).length;
  const totalCount = THREAD_DETAILS_ITEMS.length;

  it("renders clean Chinese summary without split-word '于'", () => {
    const html = renderRow("zh-CN");
    expect(html).toContain(`${defaultEnabledCount} / ${totalCount} 已开启`);
    expect(html).toContain(
      `aria-label="对话详情卡片：${defaultEnabledCount} / ${totalCount} 已开启"`,
    );
    expect(html).not.toContain(`${defaultEnabledCount} / ${totalCount} 于`);
  });

  it("preserves English 'N of M on' summary when locale is en", () => {
    const html = renderRow("en");
    expect(html).toContain(`${defaultEnabledCount} of ${totalCount} on`);
    expect(html).toContain(
      `aria-label="Thread details: ${defaultEnabledCount} of ${totalCount} on"`,
    );
  });
});
