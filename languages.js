import {DEFAULT_LANGUAGE} from '../../../app/components/localization/localized-messages';

export function getLanguageFromLocaleForLanguageFile(locale) {
  const languageMap = getLanguageMap();

  // eslint-disable-next-line no-unused-vars
  const language = Object.entries(languageMap).find(([key, value]) => {
    return value === locale.replace('_', '-');
  });

  return typeof language !== 'undefined' ? language[0].toLowerCase() : DEFAULT_LANGUAGE;
}

function getLanguageMap() {
  return {
    ar: 'ar-EG',
    cs: 'cs-CZ',
    da: 'da-DK',
    de: 'de-DE',
    el: 'el-GR',
    'en-gb' : 'en-GB',
    en: 'en-IE',
    'es-419': 'es-MX',
    es: 'es-ES',
    fi: 'fi-FI',
    fr: 'fr-FR',
    'fr-ca' : 'fr-CA',
    hu: 'hu-HU',
    it: 'it-IT',
    ja: 'ja-JP',
    ko: 'ko-KR',
    nl: 'nl-NL',
    no: 'no-NO',
    pl: 'pl-PL',
    'pt-br' : 'pt-BR',
    ru: 'ru-RU',
    sk: 'sk-SK',
    sv: 'sv-SE',
    th: 'th-TH',
    tr: 'tr-TR',
    zh: 'zh-CN',
    'zh-hk' : 'zh-HK',
    'zh-tw' : 'zh-TW',
  };
}