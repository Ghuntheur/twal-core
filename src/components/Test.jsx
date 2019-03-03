import React from 'react';
import { withTranslation } from 'react-i18next';

const Test = ({ t }) => <h1>{t('hello')}</h1>;

export default withTranslation()(Test);
