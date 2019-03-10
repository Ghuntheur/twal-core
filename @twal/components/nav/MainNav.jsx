import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import AbsoluteContent from '../ui/AbsoluteContent';

import twalConfig from '@root/twal.config';

const MainNav = ({ toggle, t }) => {
  const {
    routing: { routes }
  } = twalConfig;

  return (
    <AbsoluteContent className="nav">
      <nav className="navigation nav">
        <ul className="navigation list">
          {routes &&
            routes.map(route => (
              <li
                key={route.component}
                className="navigation list-element"
                onClick={() => toggle()}
              >
                <NavLink to={`/${route.component.toLowerCase()}`}>
                  {t(`common:${route.contentKey}`)}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </AbsoluteContent>
  );
};

MainNav.propTypes = {
  toggle: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation()(MainNav);
