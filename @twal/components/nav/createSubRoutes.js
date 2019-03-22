import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Link from './Link';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import { throwError } from '@twal/utils/CommonUtils';

export const createSubRoutes = (baseUrl, render, linksCount = 0) => {
  // check
  if (!Array.isArray(render) && typeof render !== 'function')
    throwError('You have to provide array of components or a component');
  if (!baseUrl || typeof baseUrl !== 'string') throwError('You have to provide base url string');
  if (typeof linksCount !== 'number' || linksCount < 0)
    throwError('linksCount must be a positive number');

  // create
  const { t } = useTranslation();
  const url = baseUrl.replace(/^\//, '').toLowerCase();

  if (Array.isArray(render)) {
    const routes = [];
    const links = [];

    render.forEach((comp, index) => {
      const uid = uniqid();
      routes.push(
        <Route key={`${comp.name}--${uid}--route`} path={`/${url}/${index + 1}`} component={comp} />
      );
      links.push(
        <Link
          className="submenu-link"
          key={`${comp.name}--${uid}--link`}
          to={`/${url}/${index + 1}`}
        >
          {t(`${url}-links:${index + 1}`)}
        </Link>
      );
    });

    const Routes = () => (
      <Switch>
        {routes}
        <Route path="*" render={() => <Redirect to={`/${url}/1`} />} /> */}
      </Switch>
    );

    return [Routes, links];
  }

  const Component = withRouter(render);
  const Routes = () => (
    <Switch>
      <Route path={`/${url}/:id`} component={Component} />
      <Route path="*" render={() => <Redirect to={`/${url}/1`} />} />
    </Switch>
  );

  const links = Array(linksCount)
    .fill()
    .map((_, index) => (
      <Link className="submenu-link" key={`${uniqid()}--link`} to={`/${url}/${index + 1}`}>
        {t(`${url}-links:${index + 1}`)}
      </Link>
    ));

  return [Routes, links];
};
