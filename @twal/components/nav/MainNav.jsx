import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import HomeButton from './HomeButton';
// import Rooms from '@root/src/components/Rooms';
// import History from '@root/src/components/History';

const MainNav = ({ routes, namespace, LinkComponent }) => {
  const { t } = useTranslation(namespace);
  return (
    <>
      <HomeButton />
      <Route
        exact
        path="/"
        component={() => {
          return routes.map(route => (
            <LinkComponent key={route.path}>
              <Link to={`/${route.path}`}>{t(route.contentKey)}</Link>
            </LinkComponent>
          ));
        }}
      />

      {routes.map(route => (
        <Route key={route.path} path={`/${route.path}`} component={route.component} />
      ))}
    </>
  );
};

MainNav.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      contentKey: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired
    })
  ).isRequired,
  namespace: PropTypes.string,
  LinkComponent: PropTypes.func
};

MainNav.defaultProps = {
  namespace: 'common',
  LinkComponent: ({ children }) => <div>{children}</div>
};

export default MainNav;
