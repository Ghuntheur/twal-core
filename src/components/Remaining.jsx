import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

const Remaining = ({ t }) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  const final = new Date(2019, 2, 27);
  const diffDays = Math.round(Math.abs((today.getTime() - final.getTime()) / oneDay));

  return <h1>{t('remaining', { counter: diffDays })}</h1>;
};

Remaining.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Remaining);
