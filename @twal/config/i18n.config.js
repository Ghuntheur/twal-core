import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import twalConfig from '@root/twal.config';

import { throwError } from '@twal/utils/CommonUtils';

const {
  i18n: { availableLanguages, defaultLanguage, namespaces, debug } = {},
  i18n: twalI18n
} = twalConfig;

if (!twalI18n) throwError('Provide an i18n object in configuration file');

if (!availableLanguages || !availableLanguages.length)
  throwError(
    'Provide languages in configuration file',
    'Example',
    `${JSON.stringify({
      i18n: {
        availableLanguages: ['fr', 'en', 'es']
      }
    })}`
  );

if (!defaultLanguage)
  throwError(
    'Provide a default language',
    `${JSON.stringify({
      i18n: { defaultLanguage: 'fr' }
    })}`
  );

const namespacesAvailable = [...new Set(['common', 'languages', ...(namespaces || [])])];

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    debug: debug === undefined ? true : debug,
    load: 'languageOnly',
    lng: defaultLanguage,
    fallbackLng: availableLanguages,
    ns: namespacesAvailable,
    defaultNS: 'common',
    fallbackNS: ['common'],
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;
