import React from 'react';
import PropTypes from 'prop-types';

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

  componentDidUpdate(prevProps) {
    if (prevProps.screenSaverPrinted && !this.props.screenSaverPrinted) {
      // open navigation when screen saver come out and close settings
      // this.setState({
      //   [MainMenus.NAV_OPENED]: true,
      //   [MainMenus.SETTINGS_OPENED]: false
      // });
    }
  }

  toggle(name, value = null) {
    // const secondaryName =
    // name === MainMenus.NAV_OPENED ? MainMenus.SETTINGS_OPENED : MainMenus.NAV_OPENED;
    this.setState({
      [name]: value === null ? !this.state[name] : value
      // ...(this.state[secondaryName] && { [secondaryName]: false })
    });
  }

  render() {
    const { navOpened, settingsOpened } = this.state;
    return (
      <div className="main-menus">
        <div className="main-buttons">
          {!settingsOpened && (
            <IconButton
              icon={navOpened ? 'cancel' : 'home'}
              onClick={() => this.toggle(MainMenus.NAV_OPENED)}
              className="button__home"
            />
          )}
          {!navOpened && (
            <IconButton
              icon={settingsOpened ? 'cancel' : 'cog'}
              onClick={() => this.toggle(MainMenus.SETTINGS_OPENED)}
              className="button__settings"
            />
          )}
        </div>
        <div className="menu">
          {navOpened && <MainNav opened={navOpened} toggle={this.toggle} />}
          {settingsOpened && <Settings />}
        </div>
      </div>
    );
  }
}

MainMenus.propTypes = {
  screenSaverPrinted: PropTypes.bool
};

export default MainMenus;
