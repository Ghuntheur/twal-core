import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ to, children, ...rest }) => (
  <Link to={to.toLowerCase()} {...rest}>
    {children}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default NavLink;
