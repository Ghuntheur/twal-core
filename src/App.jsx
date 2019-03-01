import React from 'react';
import { withTranslation } from 'react-i18next';

class App extends React.Component {
  render() {
    const { t } = this.props;
    return <h1>bonjour = {t('hello')}</h1>;
  }
}

export default withTranslation()(App);
