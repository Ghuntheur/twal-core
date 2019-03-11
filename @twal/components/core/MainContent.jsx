import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Page } from '@twal';
import Home from '@twal/components/ui/Home';

import twalConfig from '@root/twal.config';

const MainContent = () => {
  const { routing: { routes } = {} } = twalConfig;

  // routes are required
  if (!routes)
    throw new Error('Provide an array of routes in your configuration file. Reffer the doc');

  const defaultRoute = routes && (routes.find(route => route.default) || routes[0]);

  return (
    <>
      <Route
        exact
        path="/"
        render={() =>
          defaultRoute ? (
            <Redirect to={`/${defaultRoute.path || defaultRoute.component}`.toLowerCase()} />
          ) : (
            <Page>
              <Home />
            </Page>
          )
        }
      />
      {routes &&
        routes.map(route => {
          const Component = require(`@root/src/pages/${route.component}`).default;
          return (
            <Route
              key={route.component}
              path={`/${route.path || route.component}`.toLowerCase()}
              component={() => (
                <Page>
                  <Component />
                </Page>
              )}
            />
          );
        })}
    </>
  );
};

export default MainContent;
