import React from 'react';
import { Link, Route } from 'react-router-dom';

const createMainNav = routes => {
  const links = routes.map(route => (
    <Link key={route.to} to={route.to}>
      {route.to}
    </Link>
  ));

  const Outlet = () => (
    <>
      {routes.map(route => (
        <Route key={route.to} path={`/${route.to}`} component={route.component} />
      ))}
    </>
  );

  return [links, Outlet];
};

export { createMainNav };
