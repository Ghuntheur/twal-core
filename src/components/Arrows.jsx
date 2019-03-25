import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Link from '@twal/components/nav/Link';
import twalConfig from '../../twal.config';

import '../styles/arrows.scss';

const Arrows = ({ match }) => {
  const {
    routing: { routes }
  } = twalConfig;

  const activeRoute = match.path.replace(/^\//, '');
  const activeRouteIndex = routes.findIndex(
    route =>
      (route.path && route.path.toLowerCase() === activeRoute.toLowerCase()) ||
      route.component.toLowerCase() === activeRoute.toLowerCase()
  );

  const prevRoute = routes[activeRouteIndex - 1];
  const nextRoute = routes[activeRouteIndex + 1];
  const prevUrl = prevRoute && (prevRoute.path || prevRoute.component).toLowerCase();
  const nextUrl = nextRoute && (nextRoute.path || nextRoute.component).toLowerCase();

  return (
    <div className="arrows-container">
      <div className="arrow prev">
        <Link to={`/${prevUrl}` || ''} className={classnames('icon', { invisible: !prevRoute })}>
          ←
        </Link>
      </div>
      <div className="arrow next">
        <Link to={`/${nextUrl}` || ''} className={classnames('icon', { invisible: !nextRoute })}>
          →
        </Link>
      </div>
    </div>
  );
};

Arrows.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Arrows);
