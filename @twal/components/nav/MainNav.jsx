import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import '@twal/styles/components/nav/mainNav.scss';

import twalConfig from '@root/twal.config';
import Languages from '../languages/Languages';

const MainNav = ({ toggle, t }) => {
  const {
    routing: { routes, linksNamespace } = {},
    navigation: { showLanguages } = {}
  } = twalConfig;

  // routes are required
  if (!routes)
    throw new Error('Provide an array of routes in your configuration file. Reffer the doc');

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        {routes &&
          routes.map(route => (
            <li
              key={route.component}
              className="nav-list-elem"
              onClick={() => toggle('navOpened')}
            >
              <NavLink to={`/${route.component.toLowerCase()}`}>
                {t(`common:${route.contentKey}`)}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>

  );
};

MainNav.propTypes = {
  toggle: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation()(MainNav);
