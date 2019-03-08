import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Page } from '@twal';
import Home from '@twal/components/ui/Home';

import twalConfig from '@root/twal.config';

const MainContent = ({ ...rest }) => {
  const { routes } = twalConfig;

  const defaultRoute = routes && (routes.find(route => route.default) || routes[0]);

  return (
    <>
      <Route
        exact
        path="/"
        render={() =>
          defaultRoute ? (
            <Redirect to={`/${defaultRoute.component.toLowerCase()}`} />
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
              path={`/${route.component}`}
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
