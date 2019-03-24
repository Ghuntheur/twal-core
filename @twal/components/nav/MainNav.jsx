import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import { withTranslation } from 'react-i18next';
import '@twal/styles/components/nav/mainNav.scss';

import twalConfig from '@root/twal.config';
import Languages from '../languages/Languages';
import { throwError } from '@twal/utils/CommonUtils';

const MainNav = ({ toggle, t }) => {
  const {
    routing: { routes, linksNamespace } = {},
    navigation: { showLanguages } = {}
  } = twalConfig;

  // routes are required
  if (!routes) throwError('Provide an array of routes in your configuration file.');

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        {routes &&
          routes.map(route => {
            const i18nKey = route.i18nKey || route.component.toLowerCase();
            const linkOptions = route.linkOptions || {};
            return (
              <li key={route.component} className="nav-list-elem" onClick={() => toggle()}>
                <Link to={`/${route.component.toLowerCase()}`}>
                  {t(`${linksNamespace || 'common'}:${i18nKey}`, linkOptions)}
                </Link>
              </li>
            );
          })}
      </ul>
      {(showLanguages || showLanguages === undefined) && <Languages />}
    </nav>
  );
};

MainNav.propTypes = {
  toggle: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation()(MainNav);
