# ShareIt 落地页

ShareIt 是一款隐私优先的家庭照片/视频私密分享 App，本仓库是其官方落地页（中英双语）。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Astro 5（`astro ^5.6.1`，`output: 'static'` 纯静态输出） |
| 语言 | TypeScript `^5.8.2`（`astro check`） |
| 样式 | Tailwind CSS 3（`tailwindcss ^3.4.17`，经 `@astrojs/tailwind` 集成） |
| i18n | Astro 内置 i18n 配置（`zh` / `en`，默认 `en`）+ 自维护字典 `src/i18n/ui.ts` 与工具函数 `src/i18n/utils.ts` |
| SEO | `@astrojs/sitemap`（带 i18n 配置）、`src/components/SEO.astro`、`public/robots.txt`、`public/llms.txt` / `llms-full.txt`（GEO） |
| 图标 | `astro-icon`（icon 目录配置为 `src/icons`） |
| 包管理器 | pnpm（仓库带 `pnpm-lock.yaml`） |

## 快速开始

```bash
pnpm install       # 安装依赖
pnpm dev           # 开发服务器（默认 http://localhost:4321）
pnpm build         # 生产构建（输出到 dist/）
pnpm preview       # 预览生产构建
pnpm check         # 类型检查（astro check）
```

## 项目结构

```text
shareit-landing/
├── public/                    # 静态资源：favicon、robots.txt、llms.txt、llms-full.txt、og-default.jpg
├── src/
│   ├── components/
│   │   ├── Header.astro / Footer.astro   # 页眉页脚
│   │   ├── SEO.astro                     # head 元数据 / hreflang / 结构化数据
│   │   ├── LanguageSwitcher.astro        # 中英切换
│   │   ├── Icon.astro                    # astro-icon 封装
│   │   └── sections/                     # 落地页区块：Hero、PainPoints、Solution、
│   │                                     # Features、StorageModes、FAQ、CTA、Home
│   ├── i18n/
│   │   ├── ui.ts                         # zh / en 翻译字典与类型定义
│   │   └── utils.ts                      # useTranslations、getLocalizedUrl 等工具
│   ├── layouts/
│   │   └── BaseLayout.astro              # 基础布局
│   ├── pages/                            # 路由（见下文）
│   └── styles/
│       └── global.css                    # Tailwind 全局样式
├── astro.config.mjs                      # site、i18n、集成、prefetch 配置
├── tailwind.config.mjs
├── wrangler.toml                         # Cloudflare Pages 项目配置
└── package.json
```

## 路由说明

i18n 配置为 `locales: ['zh', 'en']`、`defaultLocale: 'en'`、`prefixDefaultLocale: false`，英文位于根路径、中文带 `/zh` 前缀：

| 路径 | 说明 |
|------|------|
| `/` | 英文首页（默认语言，无 URL 前缀） |
| `/privacy`、`/terms` | 英文隐私政策 / 服务条款 |
| `/zh` | 中文首页 |
| `/zh/privacy`、`/zh/terms` | 中文隐私政策 / 服务条款 |
| `/404` | 404 页面（英文） |

另由 sitemap 集成生成带 hreflang 的 `sitemap-index.xml`；语言切换链接由 `src/i18n/utils.ts` 的 `getLocalizedUrl` 生成互指 URL。

## 部署

部署目标为 **Cloudflare Pages**（见 `wrangler.toml`，项目名 `shareit-landing`）：

- 主推 Cloudflare Pages 原生 Git 集成：在 Dashboard 连接仓库，构建命令 `pnpm build`，输出目录 `dist`，环境变量 `NODE_VERSION=20`
- `astro.config.mjs` 的 `site` 当前为 `https://shareit-landing.pages.dev`，绑定自定义域名时需同步更新
- `wrangler.toml` 亦可用于 wrangler CLI 部署（可选）
