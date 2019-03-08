import React from 'react';

import IconButton from '@twal/components/ui/IconButton';
import MainNav from '@twal/components/nav/MainNav';
import Settings from '@twal/components/settings/Settings';

class MainMenus extends React.Component {
  static NAV_OPENED = 'navOpened';
  static SETTINGS_OPENED = 'settingsOpened';

  state = {
    [MainMenus.NAV_OPENED]: false,
    [MainMenus.SETTINGS_OPENED]: false
  };

  toggle(name) {
    this.setState({ [name]: !this.state[name] });
  }

  render() {
    const { navOpened, settingsOpened } = this.state;
    return (
      <div className="main-menus">
        <div className="main-buttons">
          <IconButton
            icon="home"
            onClick={() => this.toggle(MainMenus.NAV_OPENED)}
            className="button__home"
          />
          <IconButton
            icon="cog-1"
            onClick={() => this.toggle(MainMenus.SETTINGS_OPENED)}
            className="button__settings"
          />
        </div>
        <div className="menu">
          {navOpened && <MainNav opened={navOpened} toggle={this.toggle} />}
          {settingsOpened && <Settings />}
        </div>
      </div>
    );
  }
}

export default MainMenus;
