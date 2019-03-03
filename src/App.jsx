import React from 'react';

import withScreenSaver from '@twal/screenSaver/withScreenSaver';

class App extends React.Component {
  render() {
    return <h1>home</h1>;
  }
}

App.propTypes = {};

export default withScreenSaver({
  unit: 's',
  timeout: 4
})(App);
