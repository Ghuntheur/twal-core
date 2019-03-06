import React from 'react';
import { Route } from 'react-router-dom';

import { Page } from '@twal';

import twalConfig from '@root/twal.config';

const MainContent = () => {
  const { routes } = twalConfig;

  return routes.map(route => (
    <Page>
      <Route
        key={route.component}
        path={`/${route.component}`}
        component={require(`@root/src/pages/${route.component}`).default}
      />
    </Page>
  ));
};

export default MainContent;
