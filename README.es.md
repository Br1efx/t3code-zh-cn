<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">
    <img src="./assets/prod/t3-black-web-icon-192x192.png" width="80" height="80" alt="Logo de T3 Code" />
  </a>
</p>

<h1 align="center">T3 Code — Edición Preview en Chino Simplificado y Antigravity Mejorado</h1>

<p align="center">
  Fork comunitario preview de <a href="https://github.com/pingdotgg/t3code"><code>pingdotgg/t3code</code></a> pensado para desarrolladores chinos, vibe coders y principiantes<br />
  Chino simplificado pulido · T3 Connect listo para usar · Actualización automática en segundo plano de Antigravity CLI
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
  <strong>Español</strong> ·
  <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe"><strong>Descargar instalador Windows x64</strong></a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1">Notas de la versión</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml">Registros de compilación</a> ·
  <a href="https://github.com/Br1efx/t3code-zh-cn/issues">Incidencias</a>
</p>

<p align="center">
  <img src="./.github/readme/hero.webp" width="100%" alt="Vista previa de T3 Code en escritorio y móvil" />
</p>

---

**T3 Code** es el panel de control de código abierto para agentes locales de programación (Claude Code, Codex, Cursor, Antigravity, OpenCode, Grok, Kiro, Pi, Muse Code, fx y cualquier agente [ACP](./docs/user/providers-acp.md)), sincronizado en tiempo real entre escritorio, web y móvil.

**`Br1efx/t3code-zh-cn`** es un fork comunitario no oficial sincronizado con la rama principal de [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) (`v0.1.11-nightly`, con **más de 520 commits** por delante de `v0.1.10`). Elimina traducciones rígidas y jerga técnica en chino simplificado, habilita T3 Connect de serie y añade actualización automática en segundo plano para Antigravity CLI.

## Novedades principales

1. **Chino simplificado pulido para principiantes (Web / Desktop / Mobile)**
   Se han perfeccionado **1,090 entradas** sobre el catálogo oficial de más de 14,500 cadenas (`工作树` → `独立目录`, `智能体提供方` → `供应商`, `已收尾` → `已完成`, `issue` → `议题`), corrigiendo inconsistencias en móvil, manteniendo los nombres `T3 Code` / `T3 Connect` y mejorando la separación visual del menú lateral de Ajustes.
2. **T3 Connect listo para usar sin recompilar**
   Incluye la configuración pública oficial del relay inyectada en tiempo de compilación para iniciar sesión en **T3 Connect** y emparejar directamente con las apps móviles oficiales de iOS y Android.
3. **Actualización automática en segundo plano de Antigravity CLI**
   Mientras que upstream comprueba actualizaciones bajo demanda desde Ajustes, esta versión verifica periódicamente en segundo plano y cambia de forma atómica a la última versión de Antigravity CLI de Google, sumado a más de 25 mejoras recientes de Antigravity (editar y retroceder historial, comando nativo `/orchestrator`, compactación y correcciones en Windows).
4. **Todas las funciones recientes de upstream `v0.1.11`**
   Panel de **Issues** (GitHub / GitLab / Linear), **Preview Tunnel** para abrir `localhost` remotos, herramientas MCP de CI y PR para agentes, y arrastre directo de archivos al Explorador de Windows.

## Comparativa con la versión oficial (`v0.1.11-nightly`)

| Característica                                           | Oficial `v0.1.11-nightly`                      | Este fork (`v0.1.11-preview.1`)                              |
| -------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| Núcleo `v0.1.11` (Issues / Preview Tunnel / MCP CI y PR) | Incluido                                       | **Sincronizado al 100 %** (+520 commits sobre `v0.1.10`)     |
| Experiencia en chino simplificado                        | Catálogo nativo (con algunos términos rígidos) | **Pulido en Web / Desktop / Mobile** para principiantes      |
| Emparejamiento móvil con T3 Connect                      | Solo en compilaciones oficiales                | **Configuración pública integrada — listo al instalar**      |
| Actualización de Antigravity CLI                         | Comprobación y clic manual en Ajustes          | **Comprobación periódica en segundo plano y cambio atómico** |
| Firma de código y actualizaciones                        | Firmado oficialmente con autoactualización     | Preview comunitario sin firma · actualización manual         |

## Instalación rápida (Windows x64)

1. **Descarga**: [T3-Code-0.1.11-preview.1-x64.exe](https://github.com/Br1efx/t3code-zh-cn/releases/download/v0.1.11-preview.1/T3-Code-0.1.11-preview.1-x64.exe) ([Notas y sumas SHA-256](https://github.com/Br1efx/t3code-zh-cn/releases/tag/v0.1.11-preview.1))
2. **SmartScreen**: Al ser una compilación comunitaria sin firma comercial, haz clic en **Más información → Ejecutar de todas formas** en el aviso de Windows Defender SmartScreen.
3. **Inicia y empareja**: Reinstalar encima conserva tu historial, ajustes y sesiones iniciadas en `~/.t3` (incluido Antigravity). Abre **Ajustes → Compartir y acceso** para iniciar sesión en **T3 Connect** y vincular la app móvil oficial ([App Store](https://apps.apple.com/us/app/t3-code-remote-claude-more/id6787819824) / [Google Play](https://play.google.com/store/apps/details?id=com.t3tools.t3code)).

> [!NOTE]
> La aplicación en Windows conserva el nombre **T3 Code (Beta)** y se actualiza manualmente mediante GitHub Releases. Para versiones oficiales firmadas o instaladores de macOS / Linux, visita [t3.codes/download](https://t3.codes/download) o [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code).

<details>
<summary><strong>Desarrolladores: ejecutar desde el código fuente</strong></summary>

Requiere Node.js y [Vite+](https://viteplus.dev/):

```sh
vp install --frozen-lockfile
vp run dev --home-dir ./.t3
```

</details>

## Créditos y transparencia

- **Proyecto original**: Basado en [`pingdotgg/t3code`](https://github.com/pingdotgg/t3code) (sin afiliación con el equipo oficial de T3).
- **Colaboradores iniciales en chino**: Agradecimiento a [`ZhiweiXiao98/t3code`](https://github.com/ZhiweiXiao98/t3code) y [`Michaelihc/t3code-zh-cn`](https://github.com/Michaelihc/t3code-zh-cn).
- **Compilación pública verificable**: Todos los instaladores de Windows se compilan abiertamente mediante [`client-release.yml`](https://github.com/Br1efx/t3code-zh-cn/actions/workflows/client-release.yml).
- **Licencia**: [MIT](./LICENSE)
