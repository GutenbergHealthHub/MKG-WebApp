import CUSTOM from 'custom/config';

import TRANSLATIONS_DE from './translations/de';

import { NUMLanguage } from 'types';

export const LANGUAGES: NUMLanguage[] = CUSTOM.LANGUAGES ?? [
  { code: 'de', label: 'Deutsch', locale: 'de-DE' },
];

export const TRANSLATIONS = CUSTOM.TRANSLATIONS ?? {
  de: TRANSLATIONS_DE,
};

export const FALLBACK_LANGUAGE_CODE = CUSTOM.FALLBACK_LANGUAGE_CODE ?? 'de';
