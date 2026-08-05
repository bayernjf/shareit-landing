import { defaultLocale, translations, type Locale } from './ui';

/** 当前路径所属 locale */
export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'zh' || lang === 'en') return lang;
  return defaultLocale;
}

/** 取当前 locale 的翻译对象 */
export function useTranslations(url: URL) {
  const locale = getLocaleFromUrl(url);
  return translations[locale];
}

/** 取指定 locale 的翻译对象 */
export function t(locale: Locale) {
  return translations[locale];
}

/** 生成本地化路径，例如 /zh/features */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path.replace(/^\/+/, '');
  return `/${locale}${clean ? '/' + clean : ''}`;
}

/** 跨语言对应的 URL，用于 hreflang 互指与语言切换 */
export function getLocalizedUrl(url: URL, target: Locale): string {
  const locale = getLocaleFromUrl(url);
  const path = url.pathname;
  if (locale === target) return path;
  // 把路径里的 /zh 或 /en 替换为目标
  const rest = path.replace(/^\/(zh|en)/, '');
  return `/${target}${rest}`;
}
