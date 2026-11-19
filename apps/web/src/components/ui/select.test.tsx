import type { ResolvedAppLocale } from "@t3tools/shared/appLocale";
import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vite-plus/test";

import { translateWebMessage } from "~/i18n/messages";
import { WebI18nContext } from "~/i18n/WebI18nContext";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "./select";

function renderWithLocale(locale: ResolvedAppLocale, node: ReactNode): string {
  return renderToStaticMarkup(
    <WebI18nContext.Provider
      value={{
        locale,
        appLocale: locale,
        setAppLocale: () => undefined,
        t: (key, values) => translateWebMessage(locale, key, values),
      }}
    >
      {node}
    </WebI18nContext.Provider>,
  );
}

describe("Select localization", () => {
  it("localizes closed SelectValue labels from Record items in zh-CN while preserving en", () => {
    const items = {
      prefer: "Prefer",
      manual: "Manual only",
    } as const;
    const ui = (
      <Select items={items} value="manual">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          <SelectItem value="prefer">Prefer</SelectItem>
          <SelectItem value="manual">Manual only</SelectItem>
        </SelectPopup>
      </Select>
    );

    expect(renderWithLocale("en", ui)).toContain("Manual only");
    expect(renderWithLocale("zh-CN", ui)).toContain("仅手动选择");
    expect(renderWithLocale("zh-CN", ui)).not.toContain("Manual only");
  });

  it("localizes closed SelectValue labels from array items in zh-CN", () => {
    const items = [
      { value: 100, label: "Prefer" },
      { value: 25, label: "Less often" },
    ] as const;
    const ui = (
      <Select items={items} value={25}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectPopup>
      </Select>
    );

    expect(renderWithLocale("en", ui)).toContain("Less often");
    expect(renderWithLocale("zh-CN", ui)).toContain("降低频率");
    expect(renderWithLocale("zh-CN", ui)).not.toContain("Less often");
  });

  it("localizes closed SelectValue labels from grouped items and itemToStringLabel", () => {
    const grouped = [
      {
        value: "group",
        items: [
          { value: "wide", label: "Wide" },
          { value: "full", label: "Full" },
        ],
      },
    ] as const;
    const groupedUi = (
      <Select items={grouped} value="wide">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          <SelectItem value="wide">Wide</SelectItem>
          <SelectItem value="full">Full</SelectItem>
        </SelectPopup>
      </Select>
    );

    expect(renderWithLocale("zh-CN", groupedUi)).toContain("宽屏舒展");

    const customUi = (
      <Select value={{ id: "bars", text: "Bars" }} itemToStringLabel={(option) => option.text}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
      </Select>
    );

    expect(renderWithLocale("en", customUi)).toContain("Bars");
    expect(renderWithLocale("zh-CN", customUi)).toContain("信号格图标");
  });

  it("localizes explicit SelectValue children and placeholder", () => {
    const withChildren = (
      <Select value="wide">
        <SelectTrigger>
          <SelectValue>Wide</SelectValue>
        </SelectTrigger>
      </Select>
    );
    expect(renderWithLocale("zh-CN", withChildren)).toContain("宽屏舒展");

    const withPlaceholder = (
      <Select value={null}>
        <SelectTrigger>
          <SelectValue placeholder="Off" />
        </SelectTrigger>
      </Select>
    );
    expect(renderWithLocale("en", withPlaceholder)).toContain("Off");
    expect(renderWithLocale("zh-CN", withPlaceholder)).toContain("关");
  });
});
