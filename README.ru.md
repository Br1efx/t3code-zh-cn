<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">
    <img src="./assets/prod/t3-black-web-icon-192x192.png" width="80" height="80" alt="Логотип T3 Code" />
  </a>
</p>

<h1 align="center">T3 Code — Сборка Preview с улучшенным китайским и автообновлением Antigravity</h1>

<p align="center">
  Сообщество-форк <a href="https://github.com/pingdotgg/t3code"><code>pingdotgg/t3code</code></a> для китайскоязычных пользователей, вайб-кодеров и новичков<br />
  Естественный упрощённый китайский · Готовый T3 Connect · Фоновое автообновление Antigravity CLI
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
  <a href="./README.ko.md">한국어</a> ·
  <a href="./README.es.md">Español</a> ·
  <strong>Русский</strong>
</p>

<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe"><strong>Скачать установщик Windows x64</strong></a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">Примечания к выпуску</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml">Публичные логи сборок</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/issues">Сообщить о проблеме</a>
</p>

<p align="center">
  <img src="./.github/readme/hero.webp" width="100%" alt="Превью T3 Code на ПК и мобильном устройстве" />
</p>

---

**T3 Code** — это open-source панель управления локальными ИИ-агентами для программирования (Claude Code, Codex, Cursor, Antigravity, OpenCode, Grok, Kiro, Pi, Muse Code, fx и любыми [ACP](./docs/user/providers-acp.md)-агентами) с бесшовной синхронизацией между ПК, браузером и смартфоном.

**`Br1efx/t3code-zh-cn`** — неофициальный превью-форк, синхронизированный с актуальной веткой [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) (`v0.1.11-nightly`, **520+ коммитов** поверх `v0.1.10`). Он создан для пользователей, которым важен понятный китайский интерфейс без технического жаргона, работающий из коробки T3 Connect и автоматическое обновление Antigravity CLI.

## Ключевые особенности

1. **Проработанный упрощённый китайский для новичков (Web / Desktop / Mobile)**
   Доработано **1 090 строк** поверх официального каталога из 14 500+ фраз (`工作树` → `独立目录`, `智能体提供方` → `供应商`, `已收尾` → `已完成`, `issue` → `议题`), исправлены неточности в мобильной версии, сохранены названия `T3 Code` / `T3 Connect` и улучшено визуальное разделение групп в боковой панели настроек.
2. **T3 Connect работает из коробки**
   Официальные публичные параметры relay-сервера встроены на этапе сборки, поэтому вы можете сразу войти в **T3 Connect** и подключить официальное мобильное приложение для iOS / Android без ручной пересборки.
3. **Фоновое автообновление Antigravity CLI**
   В отличие от апстрима, где проверка обновлений выполняется вручную в настройках, эта сборка периодически проверяет обновления в фоне и атомарно переключается на свежую версию Antigravity CLI от Google. Включены также 25+ недавних улучшений Antigravity (редактирование и откат сообщений, нативная команда `/orchestrator`, сжатие контекста, исправления для Windows).
4. **Все новые возможности апстрима `v0.1.11`**
   Новая панель **Issues** (GitHub / GitLab / Linear), удалённый **Preview Tunnel** для `localhost`, MCP-инструменты для логов CI и управления PR, а также перетаскивание файлов прямо в Проводник Windows.

## Сравнение с официальной версией (`v0.1.11-nightly`)

| Возможность                                            | Официальная `v0.1.11-nightly`                     | Этот форк (`v0.1.11-preview.1`)                          |
| ------------------------------------------------------ | ------------------------------------------------- | -------------------------------------------------------- |
| Ядро `v0.1.11` (Issues / Preview Tunnel / CI & PR MCP) | Есть                                              | **Полная синхронизация** (520+ коммитов сверх `v0.1.10`) |
| Интерфейс на упрощённом китайском                      | Встроенный перевод (местами сухой/технический)    | **Глубокая вычитка для Web / Desktop / Mobile**          |
| Подключение смартфона через T3 Connect                 | В официальных сборках (в самосборках часто скрыт) | **Публичная конфигурация встроена — работает сразу**     |
| Обновление Antigravity CLI                             | Ручная проверка и нажатие кнопки в настройках     | **Фоновая проверка и атомарное горячее обновление**      |
| Цифровая подпись и автообновление приложения           | Официальная подпись и автообновление              | Неподписанная превью-сборка · ручная загрузка обновлений |

## Быстрая установка (Windows x64)

1. **Скачайте установщик**: [T3-Code-0.1.11-preview.1-x64.exe](https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe) ([Примечания и SHA-256](https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1))
2. **SmartScreen**: Поскольку сборка не имеет коммерческой цифровой подписи, при первом запуске нажмите **Подробнее → Выполнить в любом случае** в окне Windows Defender SmartScreen.
3. **Запуск и подключение телефона**: Установка поверх сохраняет историю чатов, настройки и авторизацию в `~/.t3` (включая Antigravity). Откройте **Настройки → Общий доступ** для входа в **T3 Connect** и подключения официального мобильного приложения ([App Store](https://apps.apple.com/us/app/t3-code-remote-claude-more/id6787819824) / [Google Play](https://play.google.com/store/apps/details?id=com.t3tools.t3code)).

> [!NOTE]
> Имя приложения в Windows остаётся **T3 Code (Beta)**; обновления загружаются вручную с GitHub Releases. Официальные подписанные сборки и версии для macOS / Linux доступны на [t3.codes/download](https://t3.codes/download) и в [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code).

<details>
<summary><strong>Для разработчиков: запуск из исходников</strong></summary>

Требуются Node.js и [Vite+](https://viteplus.dev/):

```sh
vp install --frozen-lockfile
vp run dev --home-dir ./.t3
```

</details>

## Благодарности и прозрачность

- **Апстрим**: Основано на [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) (проект не аффилирован с официальной командой T3).
- **Ранний вклад сообщества**: Спасибо [`ZhiweiXiao98/t3code`](https://github.com/ZhiweiXiao98/t3code) и [`Michaelihc/t3code-zh-cn`](https://github.com/Michaelihc/t3code-zh-cn) за раннюю локализацию.
- **Прозрачные CI-сборки**: Все установщики для Windows собираются публично через [`client-release.yml`](https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml).
- **Лицензия**: [MIT](./LICENSE)
