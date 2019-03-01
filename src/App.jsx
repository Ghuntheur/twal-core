import React from 'react';
import propTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

class App extends React.Component {
  render() {
    const { t } = this.props;
    return <h1>{t('hello')}</h1>;
  }
}

App.propTypes = {
  t: propTypes.func.isRequired
};

export default withTranslation()(App);
