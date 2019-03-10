import React from 'react';
import { useTranslation } from 'react-i18next';

import Language from './Language';

import '@twal/styles/components/languages/languages.scss';

import twalConfig from '@root/twal.config';

const Languages = () => {
  const { i18n } = useTranslation();
  const { i18n: twalI18n } = twalConfig;

  return (
    <div className="languages">
      <ul className="languages__list">
        {twalI18n &&
          twalI18n.availableLanguages.map(lang => (
            <li key={lang} className="language__element">
              <Language
                active={i18n.language === lang}
                code={lang}
                onClick={() => i18n.changeLanguage(lang)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Languages;
