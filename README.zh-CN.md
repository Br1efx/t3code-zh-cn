<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">
    <img src="./assets/prod/t3-black-web-icon-192x192.png" width="80" height="80" alt="T3 Code 图标" />
  </a>
</p>

<h1 align="center">T3 Code 简体中文 & Antigravity 增强预览版</h1>

<p align="center">
  面向中文开发者、Vibe Coder 与技术新手的 <strong>T3 Code</strong> 社区预览版<br />
  深度精校简体中文 · 开箱即用 T3 Connect 手机远程控制 · Antigravity CLI 后台自动热更新
</p>

<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">
    <img src="https://img.shields.io/badge/版本-v0.1.11--preview.1-111827?style=flat-square" alt="版本 v0.1.11-preview.1" />
  </a>
  <a href="https://github.com/pingdotgg/t3code">
    <img src="https://img.shields.io/badge/基于上游-pingdotgg%2Ft3code%20nightly-2563eb?style=flat-square" alt="基于 pingdotgg/t3code nightly" />
  </a>
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe">
    <img src="https://img.shields.io/badge/平台-Windows%20x64-0ea5e9?style=flat-square" alt="Windows x64" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/协议-MIT-16a34a?style=flat-square" alt="MIT 协议" />
  </a>
</p>

<p align="center">
  <strong>简体中文</strong> · <a href="./README.md">English</a> &nbsp;|&nbsp;
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe"><strong>直接下载 Windows x64 安装包</strong></a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">发布说明</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml">公开构建记录</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/issues">问题反馈</a>
</p>

<p align="center">
  <img src="./.github/readme/hero.webp" width="100%" alt="T3 Code 桌面端与手机端远程协同界面预览" />
</p>

---

**T3 Code** 是开源的多 Agent 编程控制面板，可以用你已有的订阅同时驱动 Claude Code、Codex、Cursor、Antigravity、OpenCode、Grok、Kiro 等本地 AI 编程工具，并在桌面端、网页端和手机端之间无缝同步进度。

本仓库（`Br1efx/t3code-zh-cn`）基于上游 [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) 最新主干（同步至 `v0.1.11-nightly`，领先 `v0.1.10` **520+ 个提交**），专为**希望无门槛体验最新版 T3 Code 的中文开发者、Vibe Coder 与技术小白**打造——去掉生硬的机翻腔与开发黑话，补齐开箱即用的 T3 Connect 远程能力与 Antigravity 自动更新体验，并作为后续持续迭代中文友好体验与自定义增强的基础分支。

## 核心亮点

### 1. 面向小白深度精校的简体中文（Web / Desktop / Mobile 全端）

在官方原生 14,500+ 词条多语言底座之上逐项润色，消除翻译腔与晦涩的 Git / 开发术语，让不熟悉英文和命令行的新手也能一眼看懂每个按钮：

| 常见生硬译法 / 术语         | 本版精校表达                     | 润色目的                           |
| --------------------------- | -------------------------------- | ---------------------------------- |
| `工作树`（Worktree）        | **独立目录**                     | 直观表达隔离开发目录，不再劝退新手 |
| `智能体提供方`              | **供应商**                       | 简短自然，贴合中文日常习惯         |
| `已收尾 / 收尾会话`         | **已完成 / 标记完成**            | 符合常见任务状态表达               |
| `issue`                     | **议题**                         | 统一全端界面术语                   |
| 移动端混用「代理 / 智能体」 | **全端统一用词与亲切「你」称呼** | 消除称呼割裂与生硬敬语             |

同时保留 `T3 Code` / `T3 Connect` 品牌原名，避免过度翻译，并优化了设置页侧栏的视觉分组，方便快速定位配置项。

### 2. 开箱即用完整 T3 Connect（免编译直连手机端）

社区自行打包的 T3 Code 往往因缺少中继配置而无法使用云端配对。本版在编译期已正确注入官方公开中继配置，安装完成后即可直接登录 **T3 Connect**，与官方 iOS / Android 手机端 App 扫码或配对远程审批任务，无需自行拉取源码、配置环境变量并重新编译。

### 3. Antigravity CLI 后台自动热更新

官方上游目前仅支持在设置页中按需手动检查并点击更新 Antigravity CLI；本版新增了**后台定时检测与原子热切换**机制，自动保持本机 Antigravity CLI 为 Google 最新版本。配合上游近期合并的 **25+ 项 Antigravity 改进**（包括从历史消息编辑回溯、`/orchestrator` 原生斜杠命令、上下文压缩、Windows 兼容修复等），安装即享完整顺滑体验。

### 4. 同步上游 `v0.1.11` 全部最新特性

- **全新议题（Issues）面板**：统一浏览与跟进 GitHub、GitLab、Linear 等平台的议题。
- **远程 `localhost` 预览穿透（Preview Tunnel）**：在远程浏览器或手机端也能直接预览本地开发服务器页面。
- **Agent MCP 能力增强**：支持 Agent 读取 CI 构建日志、查看与管理 PR。
- **Windows 细节打磨**：支持将对话中的文件胶囊直接拖拽到 Windows 资源管理器。

## 与官方原版对比

| 特性                                                           | 官方 `v0.1.11-nightly`             | 本版 `v0.1.11-preview.1`                     |
| -------------------------------------------------------------- | ---------------------------------- | -------------------------------------------- |
| 最新 `v0.1.11` 内核（议题面板 / Preview Tunnel / CI & PR MCP） | 支持                               | **同步完整支持**（领先 `v0.1.10` 520+ 提交） |
| 简体中文体验                                                   | 原生多语言底座（部分术语偏生硬）   | **全端深度精校**，去翻译腔与开发黑话         |
| T3 Connect 手机远程配对                                        | 官方打包可用（自行编译常缺失配置） | **编译期注入公开中继配置，安装即用**         |
| Antigravity CLI 更新                                           | 设置页按需检查、手动点击更新       | **后台定时检测并原子热切换至最新版**         |
| 签名与自动更新                                                 | 官方代码签名、支持自动更新源       | 未签名社区预览版、手动下载覆盖升级           |

## 快速安装（3 步上手）

1. **下载安装包**
   前往 [v0.1.11-preview.1 发布页](https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1) 或直接点击下载：
   👉 **[T3-Code-0.1.11-preview.1-x64.exe（Windows x64）](https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe)**

2. **放行 Windows SmartScreen 提示**
   由于本版为**未签名的开源社区预览构建**，首次运行安装程序时 Windows Defender SmartScreen 会弹出保护提示。点击 **「更多信息（More info）」→「仍要运行（Run anyway）」** 即可继续安装。

3. **启动并开始使用**
   桌面应用名称沿用上游的 **T3 Code (Beta)**。启动后在中文系统下自动显示简体中文，登录你已有的 AI 工具（如 Antigravity、Claude Code、Codex、Cursor 等）即可开始对话；如需手机远程控制，在设置中登录 **T3 Connect** 并与官方手机端 App 配对即可。

> [!NOTE]
> **发行说明与透明提示**
>
> - 本版为**非官方社区预览版**，不包含官方代码签名，也不接入自动更新源；后续新版本通过 GitHub Releases 手动下载覆盖安装。
> - 如需官方正式签名版、英文原版或 macOS / Linux 安装包，请直接前往上游 [t3.codes](https://t3.codes/download) 或 [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code)。

<details>
<summary><strong>开发者：从源码本地运行</strong></summary>

需要 Node.js 与 [Vite+](https://viteplus.dev/)：

```sh
vp install --frozen-lockfile
vp run dev --home-dir ./.t3
```

</details>

## 常见问题（FAQ）

<details>
<summary><strong>1. 覆盖安装会丢失我的聊天记录、设置或登录态（如 Antigravity）吗？</strong></summary>

**不会。** 本版沿用 T3 Code 的标准数据目录 `~/.t3`，直接覆盖安装或从旧版升级时，本地对话记录、项目列表、个人设置以及各供应商登录态（包括 Antigravity、Claude Code、Codex 等）均会被完整保留。

如果你希望与官方版隔离服务端数据，可以在启动前关闭其他 T3 桌面端，并在 PowerShell 中通过 `T3CODE_HOME` 指定独立目录：

```powershell
$env:T3CODE_HOME = "$env:USERPROFILE\.t3-zh-cn"
& "C:\path\to\T3 Code (Beta).exe"
```

</details>

<details>
<summary><strong>2. 为什么 Windows 会提示「已保护你的电脑」（SmartScreen）？安全吗？</strong></summary>

Windows SmartScreen 会对所有**未购买商业代码签名证书**的新发布开源可执行文件弹出此警告，这并不代表程序包含恶意代码。本仓库的所有安装包均由 GitHub Actions 公开工作流自动构建，你可以随时查阅源码差异、查看 [构建日志](https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml)，并在发布页核对安装包的校验值。

</details>

<details>
<summary><strong>3. 怎么把电脑上的 T3 Code 连接到手机端？</strong></summary>

1. 在手机上安装官方 T3 Code App（[App Store](https://apps.apple.com/us/app/t3-code-remote-claude-more/id6787819824) / [Google Play](https://play.google.com/store/apps/details?id=com.t3tools.t3code)）。
2. 在本版桌面端中打开 **设置 → 连接（或 T3 Connect）** 并登录你的账号。
3. 使用手机 App 登录同一账号或扫描配对二维码，即可在手机上实时查看进度、审批命令并继续对话。

</details>

<details>
<summary><strong>4. 如何切换界面语言？</strong></summary>

在桌面端或网页端打开 **设置 → 常规 → 语言**，即可在 `简体中文`、`English` 与 `跟随系统` 之间自由切换。

</details>

## 致谢与源码透明验证

- **上游项目**：感谢 [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) 团队开源如此出色的本地 Agent 控制面板。本项目与官方团队无隶属关系。
- **早期中文社区贡献**：致谢 [`ZhiweiXiao98/t3code`](https://github.com/ZhiweiXiao98/t3code)（肖志伟）与 [`Michaelihc/t3code-zh-cn`](https://github.com/Michaelihc/t3code-zh-cn) 在早期简体中文化上的先行探索。
- **构建透明**：所有 Windows 预发布安装包均通过仓库公开工作流 [`client-release.yml`](https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml) 由开源代码直接构建，欢迎审查每一行提交。
- **开源协议**：沿用上游 [MIT License](./LICENSE)。
