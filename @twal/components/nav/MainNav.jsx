import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import HomeButton from './HomeButton';

import twalConfig from '@root/twal.config';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  componentDidUpdate(prevProps) {
    if (!this.props.screenSaverPrinted && prevProps && prevProps.screenSaverPrinted)
      this.setOpen(true);
  }

  setOpen = value => this.setState({ isOpened: value });

  render() {
    const { isOpened } = this.state;
    const { namespace, t } = this.props;
    const { routes } = twalConfig;

    return (
      <div className="main-nav">
        <div className="button-container">
          <HomeButton onClick={() => this.setOpen(!isOpened)} />
        </div>
        {isOpened && (
          <nav className="navigation nav">
            <ul className="navigation list">
              {routes.map(route => (
                <li
                  key={route.component}
                  className="navigation list-element"
                  onClick={() => this.setOpen(!isOpened)}
                >
                  <NavLink to={`/${route.component.toLowerCase()}`}>
                    {t(`${namespace}:${route.contentKey}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    );
  }
}

MainNav.propTypes = {
  namespace: PropTypes.string,
  screenSaverPrinted: PropTypes.bool,
  t: PropTypes.func.isRequired
};

MainNav.defaultProps = {
  namespace: 'common'
};

export default withTranslation()(MainNav);
