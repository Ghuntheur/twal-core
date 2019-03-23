import React from 'react';
import { Route, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import { throwError } from '@twal/utils/CommonUtils';

export const createSubRoutes = (baseUrl, render, renderLinks = null) => {
  // check
  if (!Array.isArray(render) && typeof render !== 'function')
    throwError('You have to provide array of components or a component');
  if (!baseUrl || typeof baseUrl !== 'string') throwError('You have to provide base url string');
  if (
    renderLinks !== null &&
    (typeof renderLinks === 'number' && renderLinks < 0) &&
    typeof !Array.isArray(renderLinks)
  )
    throwError('linksCount must be a positive number');

  // create
  const { t } = useTranslation();

  if (Array.isArray(render)) {
    const routes = [];
    const links = [];

    render.forEach((comp, index) => {
      const uid = uniqid();
      routes.push(
        <Route
          key={`${comp.name}--${uid}--route`}
          path={`${baseUrl}/${index + 1}`}
          component={comp}
        />
      );
      links.push(
        <NavLink key={`${comp.name}--${uid}--link`} to={`${baseUrl}/${index + 1}`}>
          {t(`${baseUrl.replace(/^\//, '')}-links:${index + 1}`)}
        </NavLink>
      );
    });

    const Routes = () => (
      <Switch>
        {routes}
        <Route path="*" component={() => <Redirect to={`${baseUrl}/1`} />} />
      </Switch>
    );

    return [Routes, links];
  }

  const Component = withRouter(render);
  const Routes = () => (
    <Switch>
      <Route path={`${baseUrl}/:id`} component={Component} />
      <Route path="*" component={() => <Redirect to={`${baseUrl}/1`} />} />
    </Switch>
  );

  const array = Array.isArray(renderLinks)
    ? renderLinks
    : Array(renderLinks)
        .fill()
        .map((_, index) => index + 1);

  const links = array.map(item => (
    <NavLink key={`${uniqid()}--link`} to={`${baseUrl}/${item}`}>
      {t(`${baseUrl.replace(/^\//, '')}-links:${item}`)}
    </NavLink>
  ));

  return [Routes, links];
};
