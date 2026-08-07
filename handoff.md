# Handoff — shareit-landing

更新时间：2026-08-08

## 项目概况
ShareIt 产品落地页。Astro 7 + Tailwind CSS v4 静态站点，中英双语，
部署于 Cloudflare Pages（站点：https://shareit-landing.pages.dev）。
通过页头/页脚链接回 hub 站 bayjf.com，不与其他落地页直接互链。

## 已完成（本地未推送，分支 dev）
- `9aa0993` build: upgrade to Astro 7 and Tailwind CSS v4
- `8342184` feat(legal): add privacy, terms and 404 pages
- `176f655` docs: add README with project overview

Tailwind v4 迁移要点：移除 @astrojs/tailwind 集成，改用 @tailwindcss/vite；
global.css 采用 @import "tailwindcss" + @theme 设计令牌；
v3 的 container 组件用自定义 @utility container 还原。

## 注意点
- OG 图只有一张默认图（public/og-default.jpg），无中英分版。
- 构建时有 Astro.request.headers 的 prerender 警告（不影响产物，可后续用 Astro.headers.get 的守卫或仅在服务端路由使用来消除）。
- robots.txt、sitemap 已就位；构建通过；提交仅在本地。

## 下一步
1. （可选）补充中英双语 PNG OG 图。
2. 消除 Astro.request.headers prerender 警告。
3. `git push`（dev 分支，推送前可先 `git pull --rebase`）。
