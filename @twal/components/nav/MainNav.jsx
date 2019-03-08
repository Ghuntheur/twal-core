import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import IconButton from '../ui/IconButton';
import AbsoluteContent from '../ui/AbsoluteContent';

import twalConfig from '@root/twal.config';

class MainNav extends React.Component {
  componentDidUpdate(prevProps) {
    const { screenSaverPrinted, setOpen } = this.props;
    if (!screenSaverPrinted && prevProps && prevProps.screenSaverPrinted) setOpen(true);
  }

  render() {
    const { namespace, t, navOpened, setOpen } = this.props;
    const {
      routing: { routes }
    } = twalConfig;

    return (
      <div className="main-nav">
        <IconButton onClick={() => setOpen(!navOpened)} icon="home" className="button__home" />
        {navOpened && (
          <AbsoluteContent className="nav">
            <nav className="navigation nav">
              <ul className="navigation list">
                {routes &&
                  routes.map(route => (
                    <li
                      key={route.component}
                      className="navigation list-element"
                      onClick={() => setOpen(!navOpened)}
                    >
                      <NavLink to={`/${route.component.toLowerCase()}`}>
                        {t(`${namespace}:${route.contentKey}`)}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </nav>
          </AbsoluteContent>
        )}
      </div>
    );
  }
}

MainNav.propTypes = {
  namespace: PropTypes.string,
  screenSaverPrinted: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  navOpened: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

MainNav.defaultProps = {
  namespace: 'common'
};

export default withTranslation()(MainNav);
