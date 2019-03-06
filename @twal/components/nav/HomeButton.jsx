import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';
import PropTypes from 'prop-types';

import '@twal/styles/components/nav/homeButton.scss';

const HomeButton = ({ t }) => (
  <Link className="button button__home p-2" to="/">
    {t('hello')}
  </Link>
);

HomeButton.propTypes = {
  content: PropTypes.node,
  t: PropTypes.func.isRequired
};

export default compose(
  withRouter,
  withTranslation()
)(HomeButton);
