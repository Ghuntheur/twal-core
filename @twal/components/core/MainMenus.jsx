import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IconButton from '@twal/components/ui/IconButton';
import MainNav from '@twal/components/nav/MainNav';
import Settings from '@twal/components/settings/Settings';

import { CSSTransition } from 'react-transition-group';

import '@twal/styles/components/core/mainMenus.scss';

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
      const { screenSaver: { openNavOnUnmount } = {} } = twalConfig;
      if (openNavOnUnmount || openNavOnUnmount === undefined) {
        this.setState({
          [MainMenus.NAV_OPENED]: true,
          [MainMenus.SETTINGS_OPENED]: false
        });
      }
    }
  }

  toggle = name => (value = null) =>
    this.setState({
      [name]: value === null ? !this.state[name] : value
    });

  render() {
    const { navOpened, settingsOpened } = this.state;
    const {
      navigation: {
        buttonsSimultaneity,
        navComponent,
        settingsComponent,
        navIconOpen,
        navIconClose,
        settingsIconOpen,
        settingsIconClose
      } = {}
    } = twalConfig;

    const NavComponent = navComponent
      ? require(`@root/src/${navComponent.replace(/^\//, '')}.jsx`).default
      : MainNav;

    const SettingsComponent = settingsComponent
      ? require(`@root/src/${settingsComponent.replace(/^\//, '')}.jsx`).default
      : Settings;

    const classNames = className =>
      classnames(className, {
        'nav-opened': navOpened,
        'settings-opened': settingsOpened,
        'btn-simult': buttonsSimultaneity
      });

    const HomeButton = () => (
      <IconButton
        icon={navOpened ? navIconClose || 'cancel' : navIconOpen || 'menu'}
        className={classNames('btn-home')}
        onClick={() => this.toggle(MainMenus.NAV_OPENED)()}
      />
    );

    const SettingsButton = () => (
      <IconButton
        icon={settingsOpened ? settingsIconClose || 'cancel' : settingsIconOpen || 'cog'}
        className={classNames('btn-settings')}
        onClick={() => this.toggle(MainMenus.SETTINGS_OPENED)()}
      />
    );

    return (
      <>
        <CSSTransition in={navOpened} timeout={300} classNames="main-menu-left" unmountOnExit>
          <NavComponent opened={navOpened} toggle={() => this.toggle(MainMenus.NAV_OPENED)()} />
        </CSSTransition>
        <CSSTransition in={settingsOpened} timeout={300} classNames="main-menu-right" unmountOnExit>
          <SettingsComponent toggle={() => this.toggle(MainMenus.SETTINGS_OPENED)()} />
        </CSSTransition>
        <HomeButton />
        <SettingsButton />
      </>
    );
  }
}

MainMenus.propTypes = {
  screenSaverPrinted: PropTypes.bool
};

export default MainMenus;
