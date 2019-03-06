import React from 'react';
import withScreenSaver from '@twal/components/screenSaver/withScreenSaver';
import { Route, Link } from 'react-router-dom';
import Rooms from './components/Rooms';
import History from './components/History';
import MainNav from '@twal/components/nav/MainNav';

class App extends React.Component {
  constructor() {
    super();
    this.routes = [{ to: 'history', component: History }, { to: 'rooms', component: Rooms }];
  }

  render() {
    return (
      <MainNav />
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
