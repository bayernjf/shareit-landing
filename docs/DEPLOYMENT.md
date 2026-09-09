# 部署 — shareit-landing（ShareIt 落地页）

更新时间：2026-09-09

## 站点信息
- `astro.config.mjs` 的 `site`：`https://shareit.bayjf.com`
- 技术栈：**以 `package.json` 为准** —— Astro 7（`^7.2.0`）+ Tailwind CSS 4 + `@astrojs/sitemap`
  + `astro-icon`；README 里写的 Astro 5 / Tailwind 3 是旧版本遗留
- 类型检查：`astro check`（`typescript ^5.8.2`）
- 包管理器：**npm**（仓库带 `package-lock.json`）

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## Cloudflare Pages（Git 集成，主推）
部署目标为 Cloudflare Pages，项目名 `shareit-landing`（见 `wrangler.toml`）。

| 配置项 | 值 |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variables | `NODE_VERSION = 22`（Astro 7 要求 Node >= 22.12） |

CLI 部署（可选）：`wrangler pages deploy dist --project-name=shareit-landing`。

## 发布后验证
1. 中英双语首页与语言切换正常（`src/i18n/ui.ts` 字典）。
2. `robots.txt`、`sitemap.xml`、`llms.txt`、`llms-full.txt` 可访问且域名一致。
3. OG 图可访问。

## 注意点
- 包管理器是 npm，**不要**用 pnpm/yarn 安装，避免锁文件分叉。
- 绑定自定义域名后同步更新：`astro.config.mjs` 的 `site`、`public/robots.txt`、`llms*.txt` 里的链接。
