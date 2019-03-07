import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import '@twal/styles/components/nav/homeButton.scss';

const HomeButton = ({ t, onClick }) => (
  <div onClick={onClick} className="button button__home">
    {t('menu')}
  </div>
);

HomeButton.propTypes = {
  content: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation()(HomeButton);
