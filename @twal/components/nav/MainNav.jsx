import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import HomeButton from './HomeButton';
import NavLink from './NavLink';
// import Rooms from '@root/src/components/Rooms';
// import History from '@root/src/components/History';

import twalConfig from '@root/twal.config';

const MainNav = ({ namespace }) => {
  const { routes } = twalConfig;
  const { t } = useTranslation(namespace);

  return (
    <>
      <HomeButton />
      <nav>
        <ul>
          {routes.map(route => (
            <li key={route.component}>
              <NavLink to={route.component}>{t(route.contentKey)}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {routes.map(route => (
        <Route
          key={route.component}
          path={`/${route.component}`}
          component={require(`@root/src/pages/${route.component}`).default}
        />
      ))}
    </>
  );
};

MainNav.propTypes = {
  namespace: PropTypes.string,
  LinkComponent: PropTypes.func
};

MainNav.defaultProps = {
  namespace: 'common'
};

export default MainNav;
