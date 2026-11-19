<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">
    <img src="./assets/prod/t3-black-web-icon-192x192.png" width="80" height="80" alt="T3 Code logo" />
  </a>
</p>

<h1 align="center">T3 Code — Simplified Chinese & Antigravity Preview Edition</h1>

<p align="center">
  Community preview fork of <a href="https://github.com/pingdotgg/t3code"><code>pingdotgg/t3code</code></a> crafted for Chinese developers, vibe coders, and newcomers<br />
  Beginner-friendly Simplified Chinese · Out-of-the-box T3 Connect · Background Antigravity CLI auto-update
</p>

<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">
    <img src="https://img.shields.io/badge/release-v0.1.11--preview.1-111827?style=flat-square" alt="Release v0.1.11-preview.1" />
  </a>
  <a href="https://github.com/pingdotgg/t3code">
    <img src="https://img.shields.io/badge/upstream-pingdotgg%2Ft3code%20nightly-2563eb?style=flat-square" alt="Upstream pingdotgg/t3code nightly" />
  </a>
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe">
    <img src="https://img.shields.io/badge/platform-Windows%20x64-0ea5e9?style=flat-square" alt="Platform Windows x64" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-16a34a?style=flat-square" alt="MIT License" />
  </a>
</p>

<p align="center">
  <a href="./README.md">简体中文</a> ·
  <strong>English</strong> ·
  <a href="./README.ja.md">日本語</a> ·
  <a href="./README.ko.md">한국어</a> ·
  <a href="./README.es.md">Español</a> ·
  <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe"><strong>Download Windows x64 Installer</strong></a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">Release Notes</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml">Public Build Logs</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/issues">Issues</a>
</p>

<p align="center">
  <img src="./.github/readme/hero.webp" width="100%" alt="T3 Code desktop and mobile companion preview" />
</p>

---

**T3 Code** is the open-source control plane for local coding agents (Claude Code, Codex, Cursor, Antigravity, OpenCode, Grok, Kiro, Pi, Muse Code, fx, and any [ACP](./docs/user/providers-acp.md) agent), syncing seamlessly across desktop, web, and mobile.

**`Br1efx/t3code-zh-cn`** is an unofficial community preview fork synced to upstream [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) (`v0.1.11-nightly` / latest `main`, **520+ commits ahead of `v0.1.10`**). It is designed for **Chinese developers, vibe coders, and beginners with lower English comfort**—removing stiff translations and developer jargon, enabling T3 Connect out of the box, adding background auto-updates for Antigravity CLI, and serving as a base for ongoing UX enhancements.

## Key Highlights

1. **Beginner-Friendly Simplified Chinese Polish (Web / Desktop / Mobile)**
   Refined across the official 14,500+ string i18n catalog (`1,090` entries improved): `工作树` → `独立目录`, `智能体提供方` → `供应商`, `已收尾 / 收尾会话` → `已完成 / 标记完成 / 移回进行中`, `issue` → `议题`, fixed inconsistent mobile `代理/智能体` phrasing, preserved `T3 Code` / `T3 Connect` brand names, unified friendly `你` phrasing, and added a crisp divider to Settings sidebar groups.
2. **Out-of-the-Box T3 Connect**
   Built with the official public relay configuration injected at build time so you can sign in to **T3 Connect** and pair with the official iOS / Android T3 Code mobile apps immediately—no manual environment variables or local rebuild required.
3. **Background Auto-Update for Antigravity CLI**
   While upstream updates Antigravity CLI on demand from Settings, this build checks periodically in the background and atomically hot-swaps to Google's latest Antigravity CLI—combined with 25+ recent upstream Antigravity improvements (edit-from-history rewind, native `/orchestrator` slash command, compaction, and Windows fixes).
4. **Full Upstream `v0.1.11` Capabilities**
   Includes the new **Issues** panel (GitHub / GitLab / Linear), remote `localhost` **Preview Tunnel**, Agent MCP tools for CI logs and PR management, and drag-and-drop file pills into Windows Explorer.

## Comparison vs Official Upstream (`v0.1.11-nightly`)

| Capability                                                      | Official `v0.1.11-nightly`                             | This Fork (`v0.1.11-preview.1`)                                       |
| --------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------- |
| Latest `v0.1.11` core (Issues panel, Preview Tunnel, CI/PR MCP) | Included                                               | **Synced in full** (520+ commits ahead of `v0.1.10`)                  |
| Simplified Chinese UX                                           | Native i18n catalog (some stiff/technical phrasing)    | **Deeply polished across Web / Desktop / Mobile** for beginners       |
| T3 Connect mobile pairing                                       | Works in official builds (often missing in DIY builds) | **Public relay config injected at build time — ready out of the box** |
| Antigravity CLI updates                                         | On-demand manual check & click in Settings             | **Background scheduled check & atomic hot-swap**                      |
| Signing & updates                                               | Officially signed, auto-update feed                    | Unsigned community preview, manual download/upgrade                   |

## Quick Install (Windows x64)

1. **Download**: [T3-Code-0.1.11-preview.1-x64.exe](https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe) ([Release Notes & Checksums](https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1))
2. **SmartScreen**: Because this is an unsigned community preview build, click **More info → Run anyway** on the Windows Defender SmartScreen prompt.
3. **Launch & Pair**: Overwriting an existing install preserves your `~/.t3` chat history, settings, and provider logins (including Antigravity). Open **Settings → Sharing & access** to sign in to **T3 Connect** and pair with the official mobile app ([App Store](https://apps.apple.com/us/app/t3-code-remote-claude-more/id6787819824) / [Google Play](https://play.google.com/store/apps/details?id=com.t3tools.t3code)).

> [!NOTE]
> The Windows app keeps the upstream **T3 Code (Beta)** name and upgrades manually via GitHub Releases (no auto-update feed). For official signed releases or macOS / Linux installers, visit [t3.codes/download](https://t3.codes/download) or [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code).

<details>
<summary><strong>Developers: Run from Source</strong></summary>

Requires Node.js and [Vite+](https://viteplus.dev/):

```sh
vp install --frozen-lockfile
vp run dev --home-dir ./.t3
```

</details>

## Attribution & Transparency

- **Upstream**: Built on [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) (not affiliated with the official T3 team).
- **Early Chinese localization**: Thanks to [`ZhiweiXiao98/t3code`](https://github.com/ZhiweiXiao98/t3code) and [`Michaelihc/t3code-zh-cn`](https://github.com/Michaelihc/t3code-zh-cn) for early Simplified Chinese efforts.
- **Public CI builds**: All Windows preview installers are built transparently via [`client-release.yml`](https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml).
- **License**: [MIT](./LICENSE)
