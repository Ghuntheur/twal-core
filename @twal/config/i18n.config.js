import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import twalConfig from '@root/twal.config';

import CommonUtils from '@twal/utils/CommonUtils';

if (
  !twalConfig.i18n ||
  !twalConfig.i18n.availableLanguages.length ||
  !twalConfig.i18n.defaultLanguage ||
  !twalConfig.i18n.namespaces.length
) {
  console.error('Provide an i18n object in twal.config.js file. Reffer to the doc');
}

const twalI18n = twalConfig.i18n;

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    debug: CommonUtils.isDev(),
    load: 'languageOnly',
    lng: twalI18n.defaultLanguage,
    fallbackLng: twalI18n.availableLanguages,
    ns: ['common', 'languages', ...twalI18n.namespaces],
    defaultNS: 'common',
    fallbackNS: ['common'],
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;
