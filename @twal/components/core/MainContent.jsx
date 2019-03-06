import React from 'react';
import { Route } from 'react-router-dom';

import twalConfig from '@root/twal.config';

const MainContent = () => {
  const { routes } = twalConfig;

  return routes.map(route => (
    <Route
      key={route.component}
      path={`/${route.component}`}
      component={require(`@root/src/pages/${route.component}`).default}
    />
  ));
};

export default MainContent;
