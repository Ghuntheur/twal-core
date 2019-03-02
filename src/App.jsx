import React from 'react';
import PropTypes from 'prop-types';

import Test from './Test';
import withScreenSaver from '@twal/hoc/withScreenSaver';

class App extends React.Component {
  render() {
    return <h1>home</h1>;
  }
}

App.propTypes = {
  // t: PropTypes.func.isRequired
};

export default withScreenSaver({
  timeout: 3,
  unit: 's',
  component: <Test />
})(App);
