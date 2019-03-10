import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@twal/components/ui/IconButton';
import MainNav from '@twal/components/nav/MainNav';
import Settings from '@twal/components/settings/Settings';

import twalConfig from '@root/twal.config';

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
      const {
        screenSaver: { openNavOnUnmount }
      } = twalConfig;
      if (openNavOnUnmount || openNavOnUnmount === undefined) {
        this.setState({
          [MainMenus.NAV_OPENED]: true,
          [MainMenus.SETTINGS_OPENED]: false
        });
      }
    }
  }

  toggle(name, value = null) {
    this.setState({
      [name]: value === null ? !this.state[name] : value
    });
  }

  render() {
    const { navOpened, settingsOpened } = this.state;
    const {
      navigation: { buttonsSimultaneity }
    } = twalConfig;

    const showNavButton = buttonsSimultaneity || (!buttonsSimultaneity && !settingsOpened);
    const showSettingsButton = buttonsSimultaneity || (!buttonsSimultaneity && !navOpened);

    return (
      <div className="main-menus">
        <div className="main-buttons">
          {showNavButton && (
            <IconButton
              icon={navOpened ? 'cancel' : 'home'}
              onClick={() => this.toggle(MainMenus.NAV_OPENED)}
              className="button__home"
            />
          )}
          {showSettingsButton && (
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
