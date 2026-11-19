import { type ConfirmDialogOptions, type ContextMenuItem } from "@t3tools/contracts";
import { afterEach, beforeEach, describe, expect, it, vi } from "vite-plus/test";

const showContextMenuFallbackMock =
  vi.fn<
    <T extends string>(
      items: readonly ContextMenuItem<T>[],
      position?: { x: number; y: number },
    ) => Promise<T | null>
  >();
const dismissContextMenuMock = vi.fn<() => void>();

const requestConfirmDialogMock =
  vi.fn<(message: string, options?: ConfirmDialogOptions) => Promise<boolean> | undefined>();

vi.mock("./contextMenuFallback", () => ({
  showContextMenuFallback: showContextMenuFallbackMock,
  dismissContextMenu: dismissContextMenuMock,
}));

vi.mock("./confirmDialog", () => ({
  requestConfirmDialog: requestConfirmDialogMock,
}));

function createLocalStorageStub(): Storage {
  const values = new Map<string, string>();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => {
      values.set(key, value);
    },
    removeItem: (key) => {
      values.delete(key);
    },
    clear: () => values.clear(),
    key: (index) => [...values.keys()][index] ?? null,
    get length() {
      return values.size;
    },
  };
}

function testWindow(): Window & typeof globalThis {
  return globalThis.window ?? (globalThis as unknown as Window & typeof globalThis);
}

beforeEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
  if (globalThis.window === undefined) {
    Object.defineProperty(globalThis, "window", {
      configurable: true,
      value: globalThis,
    });
  }
  Reflect.deleteProperty(testWindow(), "desktopBridge");
  Object.defineProperty(testWindow(), "localStorage", {
    configurable: true,
    value: createLocalStorageStub(),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("LocalApi", () => {
  it("fails closed in a browser when no themed host is available", async () => {
    requestConfirmDialogMock.mockReturnValue(undefined);
    const { createLocalApi } = await import("./localApi");

    await expect(createLocalApi().dialogs.confirm("Delete this thread?")).resolves.toBe(false);
  });

  it("recursively localizes context menu items in zh-CN for both desktop and browser menus", async () => {
    const showDesktopContextMenuMock = vi.fn().mockResolvedValue("copy-full");
    Object.defineProperty(testWindow(), "desktopBridge", {
      configurable: true,
      value: { showContextMenu: showDesktopContextMenuMock },
    });

    const { setActiveWebLocale } = await import("./i18n/WebI18nContext");
    const { createLocalApi } = await import("./localApi");

    setActiveWebLocale("zh-CN");
    await createLocalApi().contextMenu.show([
      { id: "preview-media", label: "Preview media" },
      { id: "open", label: "Open in Cursor" },
      { id: "reveal", label: "Reveal in File Explorer" },
      { id: "copy-relative", label: "Copy relative path" },
      { id: "copy-full", label: "Copy full path" },
      {
        id: "open-with",
        label: "Open with",
        children: [{ id: "editor:cursor", label: "Cursor" }],
      },
    ]);

    expect(showDesktopContextMenuMock).toHaveBeenCalledWith(
      [
        { id: "preview-media", label: "预览媒体" },
        { id: "open", label: "在 Cursor 中打开" },
        { id: "reveal", label: "在文件资源管理器中显示" },
        { id: "copy-relative", label: "复制相对路径" },
        { id: "copy-full", label: "复制完整路径" },
        {
          id: "open-with",
          label: "打开方式",
          children: [{ id: "editor:cursor", label: "Cursor" }],
        },
      ],
      undefined,
      undefined,
    );

    setActiveWebLocale("en");
    showDesktopContextMenuMock.mockClear();
    await createLocalApi().contextMenu.show([{ id: "preview-media", label: "Preview media" }]);
    expect(showDesktopContextMenuMock).toHaveBeenCalledWith(
      [{ id: "preview-media", label: "Preview media" }],
      undefined,
      undefined,
    );
  });
});
