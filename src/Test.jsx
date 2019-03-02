import React from 'react';
import { withTranslation } from 'react-i18next';

const Test = ({ t }) => <h1>Test = {t('hello')}</h1>;

export default withTranslation()(Test);
