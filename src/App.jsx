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
    return (
      <MainNav
        routes={this.routes}
        LinkComponent={({ children }) => <div className="p-4">{children}</div>}
      />
      // <>
      //   <HomeButton />
      //   <Route
      //     path="/"
      //     exact
      //     render={() => (
      //       <div>
      //         <h1>Home</h1>
      //         {links.map(link => link)}
      //       </div>
      //     )}
      //   />
      //   <Outlet />
      // </>
    );
  }
}

export default withScreenSaver()(App);
