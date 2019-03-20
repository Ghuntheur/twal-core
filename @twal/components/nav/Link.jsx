import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink as Link, withRouter, Route } from 'react-router-dom';

const NavLink = ({ children, to, location, className, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <Link
        replace={to === location.pathname}
        to={to}
        className={classnames('twal-link', className)}
        {...rest}
      >
        {children}
      </Link>
    )}
  />
);

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(NavLink);
