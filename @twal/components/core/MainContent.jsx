import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Page } from '@twal';
import Home from '@twal/components/core/Home';

import twalConfig from '@root/twal.config';

const MainContent = () => {
  const { routing: { routes, useRoot, rootComponent } = {} } = twalConfig;

  // routes are required
  if (!routes)
    throw new Error('Provide an array of routes in your configuration file. Reffer the doc');

  const defaultRoute = routes && (routes.find(route => route.default) || routes[0]);

  const RootComponent = rootComponent
    ? require(`@root/src/${rootComponent.replace(/^\//, '')}.jsx`).default
    : Home;

  const defaultRouteUrl = (defaultRoute.path || defaultRoute.component)
    .replace(/^\//, '')
    .toLowerCase();

  return (
    <>
      <Route
        exact
        path="/"
        render={() =>
          useRoot || useRoot === undefined ? (
            <Page>
              <RootComponent />
            </Page>
          ) : (
            <Redirect to={`/${defaultRouteUrl}`} />
          )
        }
      />
      {routes &&
        routes.map(route => {
          const Component = require(`@root/src/pages/${route.component}`).default;
          const url = (route.path || route.component).replace(/^\//, '').toLowerCase();
          return (
            <Route
              key={route.component}
              path={`/${url}`}
              render={() => (
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
