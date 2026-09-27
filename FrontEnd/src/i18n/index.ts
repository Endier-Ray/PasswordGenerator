import { en } from './locales/en';
import { es } from './locales/es';

export const locales = {
    en,
    es,
} as const;

type Locale = keyof typeof locales;

export function useTranslations(lang: string | undefined) {
  const currentLang: Locale = lang === 'es' ? 'es' : 'en';
  return function t(key: keyof typeof en): string {
    return locales[currentLang][key] || en[key];
  };
}