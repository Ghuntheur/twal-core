import React from 'react';
import PropTypes from 'prop-types';

const Language = ({ children, ...rest }) => <div {...rest}>{children}</div>;

Language.propTypes = {
  children: PropTypes.node.isRequired
};

export default Language;
