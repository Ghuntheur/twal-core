import React from 'react';

import MainNav from '@twal/components/nav/MainNav';
import Settings from '@twal/components/settings/Settings';
import MainContent from '@twal/components/core/MainContent';

class TwalApp extends React.Component {
  state = {
    navOpened: false,
    settingsOpened: false
  };

  setOpen = name => value => this.setState({ [name]: value });

  render() {
    return (
      <main>
        <MainNav {...this.state} setOpen={this.setOpen('navOpened')} />
        <MainContent {...this.state} />
        <Settings {...this.state} setOpen={this.setOpen('settingsOpened')} />
      </main>
    );
  }
}

export default TwalApp;
