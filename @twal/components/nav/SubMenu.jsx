import React from 'react';
import PropTypes from 'prop-types';

const SubMenu = ({ links }) => links;

SubMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired
};

export default SubMenu;
