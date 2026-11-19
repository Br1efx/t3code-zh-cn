<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">
    <img src="./assets/prod/t3-black-web-icon-192x192.png" width="80" height="80" alt="T3 Code 로고" />
  </a>
</p>

<h1 align="center">T3 Code — 중국어 간체 정교화 & Antigravity 강화 프리뷰 에디션</h1>

<p align="center">
  입문자·바이브 코더·중국어 사용자를 위해 다듬은 <a href="https://github.com/pingdotgg/t3code"><code>pingdotgg/t3code</code></a> 커뮤니티 프리뷰 포크<br />
  친숙한 중국어 간체 UX · 즉시 사용 가능한 T3 Connect · Antigravity CLI 백그라운드 자동 업데이트
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
  <a href="./README.ja.md">日本語</a> ·
  <strong>한국어</strong> ·
  <a href="./README.es.md">Español</a> ·
  <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe"><strong>Windows x64 설치 파일 다운로드</strong></a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">릴리스 노트</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml">공개 빌드 로그</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/issues">이슈 제보</a>
</p>

<p align="center">
  <img src="./.github/readme/hero.webp" width="100%" alt="T3 Code 데스크톱 및 모바일 앱 미리보기" />
</p>

---

**T3 Code**는 Claude Code, Codex, Cursor, Antigravity, OpenCode, Grok, Kiro 등 로컬 AI 코딩 에이전트를 기존 구독으로 통합 제어하고 데스크톱·웹·모바일 간 작업을 실시간으로 동기화하는 오픈소스 컨트롤 플레인입니다.

**`Br1efx/t3code-zh-cn`**은 업스트림 [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) 최신 메인 브랜치(`v0.1.11-nightly` 동기화, `v0.1.10` 대비 **520+ 커밋** 반영)를 기반으로 한 비공식 커뮤니티 프리뷰 포크입니다. 딱딱한 번역투와 어려운 개발 용어를 걷어내고, 설치 즉시 동작하는 T3 Connect 원격 연결과 Antigravity CLI 자동 업데이트를 제공합니다.

## 주요 특징

1. **초보자 친화적 중국어 간체 UX 정교화 (Web / Desktop / Mobile)**
   공식 14,500+ 다국어 카탈로그에서 **1,090개 항목**을 세심하게 다듬어 어려운 Git/개발 용어를 직관적인 표현으로 개선했습니다(`工作树` → `独立目录`, `智能体提供方` → `供应商`, `已收尾` → `已完成`, `issue` → `议题` 등). 모바일 오역 수정 및 설정 사이드바 구분선도 함께 개선했습니다.
2. **설치 즉시 사용 가능한 T3 Connect**
   공식 공개 릴레이 설정이 빌드 단계에 포함되어 있어 별도의 환경 변수 설정이나 재빌드 없이 설치 직후 **T3 Connect**에 로그인하고 공식 iOS / Android 모바일 앱과 페어링할 수 있습니다.
3. **Antigravity CLI 백그라운드 자동 업데이트**
   업스트림에서는 설정 화면에서 수동으로 확인해야 하지만, 본 빌드에서는 백그라운드에서 주기적으로 확인하고 Google 최신 Antigravity CLI로 자동 전환합니다. 업스트림 최신 **25+ Antigravity 개선 사항**(이전 메시지 편집 되감기, `/orchestrator` 네이티브 명령어, 컨텍스트 압축, Windows 호환성 수정 등)도 모두 포함됩니다.
4. **업스트림 `v0.1.11` 최신 기능 완전 포함**
   신규 **Issues** 패널(GitHub / GitLab / Linear), 원격 `localhost` **Preview Tunnel**, CI 로그 조회 및 PR 관리를 위한 Agent MCP 도구, Windows 탐색기로의 파일 드래그 앤 드롭을 지원합니다.

## 공식 버전(`v0.1.11-nightly`)과 비교

| 기능                                                | 공식 `v0.1.11-nightly`                      | 본 포크 `v0.1.11-preview.1`                       |
| --------------------------------------------------- | ------------------------------------------- | ------------------------------------------------- |
| 최신 `v0.1.11` 코어 (Issues / Preview Tunnel / MCP) | 지원                                        | **완전 동기화** (`v0.1.10` 대비 520+ 커밋 포함)   |
| 중국어 간체 UX                                      | 기본 다국어 지원 (일부 딱딱한 직역 존재)    | **전 플랫폼 초보자 맞춤 정교화**                  |
| T3 Connect 모바일 페어링                            | 공식 빌드만 지원 (직접 빌드 시 주로 비활성) | **공개 릴레이 설정 사전 주입 — 설치 즉시 사용**   |
| Antigravity CLI 업데이트                            | 설정 화면에서 수동 확인 및 클릭             | **백그라운드 주기 확인 및 자동 핫스왑**           |
| 코드 서명 및 자동 업데이트                          | 공식 서명 및 자동 업데이트 피드 제공        | 미서명 커뮤니티 프리뷰 · 수동 다운로드 업그레이드 |

## 빠른 설치 (Windows x64)

1. **다운로드**: [T3-Code-0.1.11-preview.1-x64.exe](https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe) ([릴리스 노트 및 체크섬](https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1))
2. **SmartScreen 허용**: 미서명 커뮤니티 프리뷰 빌드이므로 Windows Defender SmartScreen 경고가 표시되면 **추가 정보 → 실행**을 클릭하세요.
3. **실행 및 모바일 연결**: 덮어쓰기 설치를 해도 `~/.t3`의 대화 기록, 설정, Antigravity 등의 로그인 상태는 그대로 유지됩니다. **설정 → 공유 및 액세스**에서 **T3 Connect** 로그인 후 공식 모바일 앱([App Store](https://apps.apple.com/us/app/t3-code-remote-claude-more/id6787819824) / [Google Play](https://play.google.com/store/apps/details?id=com.t3tools.t3code))과 연결하세요.

> [!NOTE]
> Windows 앱 이름은 업스트림과 동일하게 **T3 Code (Beta)**를 유지하며, 자동 업데이트 없이 GitHub Releases에서 수동으로 업그레이드합니다. 공식 서명 빌드나 macOS / Linux 설치 파일은 [t3.codes/download](https://t3.codes/download) 또는 [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code)를 이용해 주세요.

<details>
<summary><strong>개발자: 소스에서 로컬 실행</strong></summary>

Node.js와 [Vite+](https://viteplus.dev/)가 필요합니다:

```sh
vp install --frozen-lockfile
vp run dev --home-dir ./.t3
```

</details>

## 감사의 글 및 투명성

- **업스트림**: [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) 기반 (공식 T3 팀과 제휴 관계 없음).
- **초기 중국어 커뮤니티 기여**: [`ZhiweiXiao98/t3code`](https://github.com/ZhiweiXiao98/t3code), [`Michaelihc/t3code-zh-cn`](https://github.com/Michaelihc/t3code-zh-cn)에 감사드립니다.
- **공개 CI 빌드**: 모든 Windows 설치 파일은 [`client-release.yml`](https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml)을 통해 공개 소스에서 직접 빌드됩니다.
- **라이선스**: [MIT](./LICENSE)
