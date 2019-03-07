import React from 'react';
import { useTranslation } from 'react-i18next';

import Language from './Language';

import twalConfig from '@root/twal.config';

const Languages = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>Langues</h1>
      <ul>
        {twalConfig &&
          twalConfig.i18n &&
          twalConfig.i18n.availableLanguages.map(lang => (
            <li key={lang}>
              <Language onClick={() => i18n.changeLanguage(lang)}>{lang}</Language>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Languages;
