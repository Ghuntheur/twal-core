import React from 'react';
import Test from './components/Test';

import withScreenSaver from '@twal/screenSaver/withScreenSaver';

class App extends React.Component {
  render() {
    return <Test />;
  }
}

App.propTypes = {};

export default withScreenSaver({
  unit: 's',
  timeout: 4
})(App);
