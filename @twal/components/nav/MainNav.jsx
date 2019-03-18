import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import '@twal/styles/components/nav/mainNav.scss';

import twalConfig from '@root/twal.config';
import Languages from '../languages/Languages';
import IconButton from '@twal/components/ui/IconButton';

const MainNav = ({ toggle, t }) => {
  const {
    routing: { routes, linksNamespace } = {},
    navigation: { showLanguages } = {}
  } = twalConfig;

  // routes are required
  if (!routes)
    throw new Error('Provide an array of routes in your configuration file. Reffer the doc');

  return (
    <AbsoluteContent className="nav">
      <nav className="navigation nav">
        <ul className="navigation list">
          {routes &&
            routes.map(route => (
              <li key={route.component} className="navigation list-element" onClick={toggle}>
                <NavLink to={`/${route.path || route.component}`.toLowerCase()}>
                  {t(
                    `${linksNamespace || 'common'}:${route.i18nKey ||
                      route.component.toLowerCase()}`
                  )}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>

      {(showLanguages || showLanguages === undefined) && <Languages />}
    </AbsoluteContent>
  );
};

MainNav.propTypes = {
  toggle: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation()(MainNav);
