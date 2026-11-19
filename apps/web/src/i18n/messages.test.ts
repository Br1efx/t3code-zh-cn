import { describe, expect, it } from "vite-plus/test";

import { translateWebMessage, translateWebSource } from "./messages";

describe("translateWebMessage", () => {
  it("uses English as the complete baseline catalog", () => {
    expect(translateWebMessage("en", "sidebar.newThread")).toBe("New thread");
  });

  it("interpolates values in Simplified Chinese messages", () => {
    expect(
      translateWebMessage("zh-CN", "pairing.hosted.saved", {
        environment: "Local dev",
      }),
    ).toBe("Local dev 已保存在此浏览器中。");
  });

  it("interpolates thread titles in localized destructive confirmations", () => {
    expect(
      translateWebMessage("zh-CN", "sidebar.confirmDeleteThread", {
        title: "修复登录",
      }),
    ).toBe("确定要删除对话“修复登录”吗？");
  });

  it("keeps provider names and versions unchanged in localized update notices", () => {
    expect(
      translateWebMessage("zh-CN", "providerUpdate.title.single", {
        provider: "Claude",
        version: "v2.1.232",
      }),
    ).toBe("可用更新：Claude v2.1.232");
  });

  it("localizes the user-facing settings details selected for review", () => {
    expect(translateWebMessage("zh-CN", "settings.general.autoSettleDays.title")).toBe(
      "闲置多少天后自动归入已办",
    );
    expect(translateWebMessage("zh-CN", "providers.healthCheck.title")).toBe("健康检查间隔");
    expect(translateWebMessage("zh-CN", "sourceControl.versionControl")).toBe("版本控制");
    expect(translateWebMessage("zh-CN", "settings.integrations.browser.title")).toBe("浏览器");
    expect(translateWebMessage("zh-CN", "settings.integrations.browserDefaultViewport.fill")).toBe(
      "填满面板",
    );
    expect(
      translateWebMessage("zh-CN", "settings.integrations.browserDefaultViewport.rotateTo", {
        orientation: "横向",
      }),
    ).toBe("旋转为横向");
    expect(translateWebSource("zh-CN", "No actions configured.")).toBe("尚未配置操作。");
    expect(translateWebSource("zh-CN", "Project agent browser access")).toBe(
      "此项目的智能体浏览器权限",
    );
  });

  it("localizes dialog copy while preserving technical values", () => {
    expect(translateWebMessage("zh-CN", "projectAction.dialog.addTitle")).toBe("添加操作");
    expect(
      translateWebMessage("zh-CN", "sshPassword.description", {
        target: "dev@192.168.1.8",
      }),
    ).toContain("dev@192.168.1.8");
    expect(
      translateWebMessage("zh-CN", "gitDialog.publish.publishedDescription", {
        branch: "feature/i18n-zh-cn",
        provider: "GitHub",
      }),
    ).toBe("feature/i18n-zh-cn 现已发布到 GitHub。");
    expect(
      translateWebMessage("zh-CN", "pullRequestConfirm.mergeDescription", {
        number: 42,
        method: "squash",
      }),
    ).toBe("将使用 squash 合并 #42。");
    expect(translateWebMessage("zh-CN", "composer.banner.settledTitle")).toBe("此对话已归入已办");
    expect(translateWebMessage("zh-CN", "contextWindow.title")).toBe("上下文窗口");
    expect(
      translateWebMessage("zh-CN", "composer.compaction.native.question", {
        age: "2 小时 5 分钟",
        tokens: "250,000",
      }),
    ).toBe("这段对话已开启 2 小时 5 分钟，累计占用 250,000 Token。要先精简压缩上下文再继续吗？");
    expect(translateWebMessage("zh-CN", "providers.config.autoCompactWindow")).toBe(
      "达到以下用量后自动压缩",
    );
  });
});

describe("upstream UI localization", () => {
  it("localizes registry, account, permission and scheduled-task settings", () => {
    expect(translateWebSource("zh-CN", "Search ACP Registry")).toBe("搜索 ACP 注册表");
    expect(translateWebSource("zh-CN", "Provider sign-in terminal")).toBe("供应商登录终端");
    expect(translateWebSource("zh-CN", "Scheduled tasks")).toBe("定时任务");
    expect(translateWebSource("zh-CN", "Require signature")).toBe("要求签名");
    expect(translateWebSource("zh-CN", "Not granted")).toBe("未授予");
    expect(translateWebSource("zh-CN", "GH_TOKEN")).toBe("GH_TOKEN");
    expect(translateWebSource("en", "Scheduled tasks")).toBe("Scheduled tasks");
  });

  it("localizes new queue, permission and scoped-settings copy", () => {
    expect(translateWebSource("zh-CN", "Queue message")).toBe("将消息加入队列");
    expect(translateWebSource("zh-CN", "App permission approval")).toBe("应用权限审批");
    expect(translateWebSource("zh-CN", "Restore device defaults")).toBe("恢复此设备的默认设置");
    expect(translateWebSource("en", "Queue message")).toBe("Queue message");
  });

  it("preserves user-provided project names and counts in new upstream controls", () => {
    expect(
      translateWebMessage("zh-CN", "upstream.sidebar.projectFilter", { project: "feature/API-v2" }),
    ).toBe("按 feature/API-v2 筛选");
    expect(
      translateWebMessage("zh-CN", "upstream.comments.olderBots", { count: 20, hidden: 42 }),
    ).toBe("显示较早的 20 条机器人评论（隐藏了 42 条）");
  });
});

describe("v0.0.45 UI localization", () => {
  it("preserves project paths, environment names, and errors in new project messages", () => {
    expect(
      translateWebMessage("zh-CN", "newProject.createsPath", {
        path: "C:\\Users\\dev\\API-v2",
      }),
    ).toBe("将创建 C:\\Users\\dev\\API-v2");
    expect(
      translateWebMessage("zh-CN", "newProject.createdWithoutCommit", { name: "API-v2" }),
    ).toBe("已创建 API-v2，但未完成首次提交");
    expect(
      translateWebMessage("zh-CN", "newProject.onEnvironment", { environment: "dev@host" }),
    ).toBe("（dev@host）");
    expect(
      translateWebMessage("zh-CN", "newProject.gitHubErrorDescription", { error: "HTTP 403" }),
    ).toBe("HTTP 403 可在 Git 菜单中选择“发布仓库”重试。");
    expect(translateWebMessage("en", "newProject.createShortcut")).toBe("Create (Enter)");
  });

  it("localizes the Working setting through source-text settings search and restore", () => {
    expect(translateWebSource("zh-CN", "Working section (beta)")).toBe("进行中分区（测试版）");
    expect(translateWebSource("zh-CN", "Working section")).toBe("进行中分区");
    expect(
      translateWebSource(
        "zh-CN",
        "Automatically resume interrupted threads after an update, crash, or machine restart on the selected environments.",
      ),
    ).toBe("当所选运行设备完成更新、意外退出或重启电脑后，自动接着运行上次中断的对话。");
    expect(translateWebMessage("zh-CN", "sidebar.working", { count: 3 })).toBe("进行中（3）");
  });

  it("localizes new screen-reader labels without changing English fallback", () => {
    expect(translateWebMessage("zh-CN", "composer.menu.label.paths")).toBe("文件和文件夹");
    expect(translateWebMessage("zh-CN", "composer.messageLabel")).toBe("消息");
    expect(translateWebMessage("zh-CN", "composer.traits.ultrafastModeOn")).toBe("已开启极速模式");
    expect(translateWebMessage("en", "composer.menu.label.commands")).toBe("Commands");
  });
});

describe("v0.1.10 beginner-friendly localization & dynamic patterns", () => {
  it("uses unified beginner-friendly terminology across SnapShots, Labs, PRs, and threads", () => {
    expect(translateWebSource("zh-CN", "SnapShots")).toBe("快捷截图");
    expect(translateWebSource("zh-CN", "Labs")).toBe("实验功能");
    expect(translateWebSource("zh-CN", "Side chat")).toBe("旁路提问");
    expect(translateWebMessage("zh-CN", "pullRequests.title")).toBe("合并请求 (PR)");
    expect(translateWebMessage("zh-CN", "sidebar.newThread")).toBe("新建对话");
    expect(translateWebMessage("zh-CN", "sidebar.settledTitle")).toBe("已办结");
    expect(translateWebMessage("zh-CN", "sidebar.snoozedTitle")).toBe("已延后");
  });

  it("translates dynamic English UI patterns while keeping English unchanged", () => {
    expect(translateWebSource("zh-CN", "Snoozed, 2h left")).toBe("已延后，剩余 2h");
    expect(translateWebSource("zh-CN", "Settled 3 days ago")).toBe("已于 3 days ago 归入已办");
    expect(translateWebSource("zh-CN", "3 subagents running")).toBe("3 个子智能体正在运行");
    expect(translateWebSource("zh-CN", "5 changed files")).toBe("5 个改动文件");
    expect(translateWebSource("zh-CN", "Step 1 of 2: open device")).toBe(
      "第 1 / 2 步：启动模拟设备",
    );
    expect(translateWebSource("en", "3 subagents running")).toBe("3 subagents running");
  });
});
