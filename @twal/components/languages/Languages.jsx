import React from 'react';
import { useTranslation } from 'react-i18next';

import Language from './Language';

import '@twal/styles/components/languages/languages.scss';

import twalConfig from '@root/twal.config';

const Languages = () => {
  const { i18n } = useTranslation();
  const { i18n: twalI18n } = twalConfig;

  return (
    <ul className="languages">
      {twalI18n &&
        twalI18n.availableLanguages.map(lang => (
          <li key={lang} className="language-element">
            <Language
              active={i18n.language === lang}
              code={lang}
              onClick={() => i18n.changeLanguage(lang)}
            />
          </li>
        ))}
    </ul>
  );
};

export default Languages;
