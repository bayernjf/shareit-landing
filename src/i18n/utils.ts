import { defaultLocale, translations, type Locale } from './ui';

/** Current locale from URL: root = en, /zh/* = zh */
export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'zh') return 'zh';
  return defaultLocale;
}

/** Get translation object for current locale */
export function useTranslations(url: URL) {
  const locale = getLocaleFromUrl(url);
  return translations[locale];
}

/** Get translation object for a specific locale */
export function t(locale: Locale) {
  return translations[locale];
}

/** Build a localized path: en has no prefix, zh gets /zh prefix */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path.replace(/^\/+/, '');
  if (locale === 'en') {
    return clean ? '/' + clean : '/';
  }
  return '/zh' + (clean ? '/' + clean : '');
}

/** Cross-locale URL for hreflang and language switching */
export function getLocalizedUrl(url: URL, target: Locale): string {
  const locale = getLocaleFromUrl(url);
  const path = url.pathname;
  if (locale === target) return path;
  let rest = path;
  if (locale === 'zh') {
    rest = path.replace(/^\/zh/, '');
  }
  if (rest === '') rest = '/';
  if (target === 'en') {
    return rest;
  }
  return rest === '/' ? '/zh' : '/zh' + rest;
}