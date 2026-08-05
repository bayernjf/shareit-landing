// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// 部署域名（先用 pages.dev 默认域名，后续绑定自定义域名时改这里）
const SITE_URL = 'https://shareit-landing.pages.dev';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'zh',
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
  prefetch: {
    prefetchAll: true,
  },
});
