import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import CommonUtils from '@twal/utils/CommonUtils';

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    debug: CommonUtils.isDev(),
    load: 'languageOnly',
    lng: 'fr',
    fallbackLng: ['fr', 'en'],
    ns: ['common', 'test'],
    defaultNS: 'common',
    fallbackNS: ['common'],
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;
