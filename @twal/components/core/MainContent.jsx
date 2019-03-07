import React from 'react';
import { Route } from 'react-router-dom';

import { Page } from '@twal';

import twalConfig from '@root/twal.config';

const MainContent = () => {
  const { routes } = twalConfig;

  return routes.map(route => {
    const Component = require(`@root/src/pages/${route.component}`).default;
    return (
      <Route
        key={route.component}
        path={`/${route.component}`}
        component={() => (
          <Page>
            <Component />
          </Page>
        )}
      />
    );
  });
};

export default MainContent;
