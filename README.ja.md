<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">
    <img src="./assets/prod/t3-black-web-icon-192x192.png" width="80" height="80" alt="T3 Code ロゴ" />
  </a>
</p>

<h1 align="center">T3 Code — 簡体字中国語 & Antigravity 強化プレビュー版</h1>

<p align="center">
  初心者・Vibe Coder・中国語ユーザー向けに磨かれた <a href="https://github.com/pingdotgg/t3code"><code>pingdotgg/t3code</code></a> コミュニティプレビュー版<br />
  わかりやすい簡体字中国語 · すぐ使える T3 Connect · Antigravity CLI バックグラウンド自動更新
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
  <a href="./README.en.md">English</a> ·
  <strong>日本語</strong> ·
  <a href="./README.ko.md">한국어</a> ·
  <a href="./README.es.md">Español</a> ·
  <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe"><strong>Windows x64 インストーラーをダウンロード</strong></a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">リリースノート</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml">公開ビルドログ</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/issues">フィードバック</a>
</p>

<p align="center">
  <img src="./.github/readme/hero.webp" width="100%" alt="T3 Code デスクトップ版およびモバイル版のプレビュー" />
</p>

---

**T3 Code** は、Claude Code・Codex・Cursor・Antigravity・OpenCode・Grok・Kiro などのローカル AI コーディングエージェントを手元のサブスクリプションで統合管理できるオープンソースのコントロールパネルです。デスクトップ・Web・モバイル間でシームレスに連携できます。

**`Br1efx/t3code-zh-cn`** は、公式 [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) 最新メインブランチ（`v0.1.11-nightly` 同期、`v0.1.10` から **520+ コミット**先行）をベースにした非公式コミュニティプレビュー版です。専門用語や機械翻訳の不自然さを解消し、T3 Connect の即時利用と Antigravity CLI の自動更新を加えた、初心者にも扱いやすいエディションを目指しています。

## 主な特長

1. **初心者向けに徹底推敲された簡体字中国語（Web / Desktop / Mobile 全対応）**
   公式の 14,500+ 項目におよぶ多言語ベースから **1,090 項目**を精査・改善。専門用語や硬い訳語（`工作树` → `独立目录`、`智能体提供方` → `供应商`、`已收尾` → `已完成`、`issue` → `议题` など）を自然な表現へ統一し、モバイル版の誤訳修正や設定サイドバーの視認性改善も実施しています。
2. **ビルド済み設定で T3 Connect がすぐ使える**
   公式の公開リレー設定をビルド時に組み込んでいるため、インストール直後から **T3 Connect** にサインインして公式 iOS / Android アプリとペアリング可能です（環境変数の設定や再ビルドは不要）。
3. **Antigravity CLI バックグラウンド自動更新**
   公式では設定画面からの手動チェックが必要ですが、本版ではバックグラウンドで定期確認し、Google の最新 Antigravity CLI へ安全に自動切り替えします。公式最新の **25+ 件の Antigravity 改善**（履歴からの編集リワインド、`/orchestrator` ネイティブスラッシュコマンド、コンテキスト圧縮、Windows 互換修正など）もすべて含まれています。
4. **公式 `v0.1.11` の最新機能を完全収録**
   新しい **Issues** パネル（GitHub / GitLab / Linear 対応）、リモート環境向け `localhost` **Preview Tunnel**、CI ログ取得や PR 管理用 Agent MCP ツール、Windows エクスプローラーへのファイルドラッグ機能などを搭載しています。

## 公式版（`v0.1.11-nightly`）との比較

| 機能                                                 | 公式 `v0.1.11-nightly`                   | 本版 `v0.1.11-preview.1`                                 |
| ---------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------- |
| 最新 `v0.1.11` コア（Issues / Preview Tunnel / MCP） | 対応                                     | **完全同期**（`v0.1.10` から 520+ コミット反映）         |
| 簡体字中国語 UX                                      | 公式多言語対応（一部表現が硬い・専門的） | **全プラットフォームで初心者向けに精査・最適化**         |
| T3 Connect モバイル連携                              | 公式ビルドのみ対応（自作ビルドでは無効） | **公開リレー設定を事前組込み、インストール直後に利用可** |
| Antigravity CLI 更新                                 | 設定画面から手動で確認・更新             | **バックグラウンド定期チェック＆自動ホットスワップ**     |
| 署名と自動アップデート                               | 公式コード署名・自動アップデート対応     | 未署名コミュニティプレビュー版・手動ダウンロード更新     |

## クイックインストール（Windows x64）

1. **ダウンロード**：[T3-Code-0.1.11-preview.1-x64.exe](https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe)（[リリースノート・チェックサム](https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1)）
2. **SmartScreen の許可**：未署名のコミュニティビルドのため、初回起動時に Windows Defender SmartScreen が表示されます。**「詳細情報」→「実行」** をクリックして続行してください。
3. **起動とモバイル連携**：上書きインストールしても `~/.t3` のチャット履歴・設定・Antigravity 等のログイン状態は保持されます。**設定 → 共有とアクセス** から **T3 Connect** にサインインすると、公式モバイルアプリ（[App Store](https://apps.apple.com/us/app/t3-code-remote-claude-more/id6787819824) / [Google Play](https://play.google.com/store/apps/details?id=com.t3tools.t3code)）と連携できます。

> [!NOTE]
> Windows アプリ名は公式と同じ **T3 Code (Beta)** のままです。自動アップデート機能は無効化されており、GitHub Releases からの手動更新となります。公式署名版や macOS / Linux 版は [t3.codes/download](https://t3.codes/download) または [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) をご利用ください。

<details>
<summary><strong>開発者向け：ソースからローカル実行</strong></summary>

Node.js と [Vite+](https://viteplus.dev/) が必要です：

```sh
vp install --frozen-lockfile
vp run dev --home-dir ./.t3
```

</details>

## クレジット・透明性

- **アップストリーム**：[`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) をベースにしています（公式チームとは無関係です）。
- **初期中国語コミュニティ貢献**：[`ZhiweiXiao98/t3code`](https://github.com/ZhiweiXiao98/t3code) および [`Michaelihc/t3code-zh-cn`](https://github.com/Michaelihc/t3code-zh-cn) に感謝いたします。
- **公開 CI ビルド**：すべての Windows インストーラーは [`client-release.yml`](https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml) により公開ソースから直接ビルドされています。
- **ライセンス**：[MIT](./LICENSE)
