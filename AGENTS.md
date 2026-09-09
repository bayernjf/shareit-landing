# AGENTS.md — shareit-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
ShareIt 落地页：隐私优先的家庭照片 / 视频私密分享 App 官方站点（中英双语）。
产品核心是「分享前授权确认 + 延时送达（反悔窗口）」与「子女 / 长辈」角色体系。

## 技术栈
> 以 `package.json` 为准：Astro 7（`^7.2.0`）+ Tailwind CSS 4。
> README 里写的 Astro 5 / Tailwind 3 已过时。

| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（`output: 'static'`） |
| 类型检查 | `astro check`（`typescript ^5.8.2`） |
| 样式 | Tailwind CSS 4 |
| i18n | Astro i18n（`zh` / `en`，默认 `en`）+ `src/i18n/ui.ts`、`src/i18n/utils.ts` |
| SEO / GEO | `@astrojs/sitemap`（含 i18n）、`src/components/SEO.astro`、`public/robots.txt`、`public/llms.txt` |
| 图标 | `astro-icon`（icon 目录 `src/icons`） |
| 包管理 | **npm**（仓库带 `package-lock.json`） |

## 常用命令
```bash
npm install
npm run dev
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## 约定
- 包管理器是 npm，**不要**用 pnpm/yarn 安装，避免锁文件分叉。
- 区块组件在 `src/components/sections/`（Hero、PainPoints、Solution、Features、StorageModes、FAQ、CTA、Home）。
- 文案走 `src/i18n/ui.ts`，新增必须补中英两版。
- 部署细节见 `docs/DEPLOYMENT.md`（Cloudflare Pages，项目名 `shareit-landing`）。

## 不要做的事
- 不要用 pnpm/yarn。
- 不要只改一个语言的文案。
- 不要提交构建产物与 `.env`。
- 不要跳过 `git pull --rebase` 直接 push。
