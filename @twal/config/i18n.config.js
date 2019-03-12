import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import twalConfig from '@root/twal.config';

import CommonUtils from '@twal/utils/CommonUtils';

const {
  i18n: { availableLanguages, defaultLanguage, namespaces } = {},
  i18n: twalI18n
} = twalConfig;

if (!twalI18n) CommonUtils.throwError('Provide an i18n object in configuration file');

if (!availableLanguages || !availableLanguages.length)
  CommonUtils.throwError(
    'Provide languages in configuration file',
    'Example',
    `${JSON.stringify({
      i18n: {
        availableLanguages: ['fr', 'en', 'es']
      }
    })}`
  );

if (!defaultLanguage)
  CommonUtils.throwError(
    'Provide a default language',
    `${JSON.stringify({
      i18n: { defaultLanguage: 'fr' }
    })}`
  );

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    debug: CommonUtils.isDev(),
    load: 'languageOnly',
    lng: defaultLanguage,
    fallbackLng: availableLanguages,
    ns: ['common', 'languages', ...(namespaces || [])],
    defaultNS: 'common',
    fallbackNS: ['common'],
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;
