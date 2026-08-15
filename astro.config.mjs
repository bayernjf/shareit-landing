// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// 部署域名（先用 pages.dev 默认域名，后续绑定自定义域名时改这里）
const SITE_URL = 'https://shareit.bayjf.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          zh: 'zh-CN',
          en: 'en-US',
        },
      },
    }),
    icon({
      iconDir: 'src/icons',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    prefetchAll: true,
  },
});
