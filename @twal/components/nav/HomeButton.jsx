import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';
import PropTypes from 'prop-types';

import '@twal/styles/components/nav/homeButton.scss';

const HomeButton = ({ t, onClick }) => (
  <div onClick={onClick} className="button button__home p-2">
    {t('hello')}
  </div>
);

HomeButton.propTypes = {
  content: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default compose(
  withRouter,
  withTranslation()
)(HomeButton);
