import React from 'react';
import withScreenSaver from '@twal/components/screenSaver/withScreenSaver';
import MainNav from '@twal/components/nav/MainNav';

import Rooms from './components/Rooms';
import History from './components/History';

class App extends React.Component {
  constructor() {
    super();
    this.routes = [
      { path: 'history', contentKey: 'history', component: History },
      { path: 'rooms', contentKey: 'rooms', component: Rooms }
    ];
  }

  render() {
    return <MainNav routes={this.routes} />;
  }
}

export default withScreenSaver({
  timeout: 4,
  unit: 's'
  // component: <div>Mise en veille</div>
})(App);
