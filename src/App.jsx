import React from 'react';

import withScreenSaver from '@twal/screenSaver/withScreenSaver';
import Remaining from './components/Remaining';

class App extends React.Component {
  render() {
    return <Remaining />;
  }
}

export default withScreenSaver()(App);
