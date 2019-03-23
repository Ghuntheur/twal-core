import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Link from './Link';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import twalConfig from '@root/twal.config';

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

  const { navigation: { linkLabelKey } = {} } = twalConfig;
  const labelKey = linkLabelKey || 'linkLabel';
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
          {t(`${url}:${index + 1}.${labelKey}`)}
        </Link>
      );
    });

    const Routes = () => (
      <Switch>
        {routes}
        <Route path="*" render={() => <Redirect to={`/${url}/1`} />} />
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

  const array = Array.isArray(renderLinks)
    ? renderLinks
    : Array(renderLinks)
        .fill()
        .map((_, index) => index + 1);

  const links = array.map(item => (
    <Link key={`${uniqid()}--link`} to={`${baseUrl}/${item}`} className="submenu-link">
      {t(`${url}:${item}.${labelKey}`)}
    </Link>
  ));

  return [Routes, links];
};
