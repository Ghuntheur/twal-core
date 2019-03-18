import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import { throwError } from '@twal/utils/CommonUtils';

export const createSubRoutes = (match, components, namespace = null) => {
  // check
  if (!Array.isArray(components)) throwError('You have to provide array of components');
  if (!match || !match.path || !match.url)
    throwError('You have to provide react router match object');
  if (namespace && typeof namespace !== 'string') throwError('namespace must be a string');

  const routes = [];
  const links = [];

  const { t } = useTranslation();

  components.forEach((comp, index) => {
    const uid = uniqid();
    routes.push(
      <Route
        key={`${comp.name}--${uid}--route`}
        path={`${match.path}/${index + 1}`}
        component={comp}
      />
    );
    links.push(
      <NavLink key={`${comp.name}--${uid}--link`} to={`${match.url}/${index + 1}`}>
        {t(`${namespace || match.url.replace(/^\//, '')}:${comp.name.toLowerCase()}`)}
      </NavLink>
    );
  });

  const Routes = () => (
    <Switch>
      {routes}
      <Route path="*" component={() => <Redirect to={`${match.url}/1`} />} />
    </Switch>
  );

  return [Routes, links];
};
