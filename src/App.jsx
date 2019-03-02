import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import ScreenSaver from '@twal/components/ScreenSaver';

class App extends React.Component {
  render() {
    return (
      <ScreenSaver timeout={5} unit="s">
        Ceci est un screen saver
      </ScreenSaver>
    );
  }
}

App.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(App);
