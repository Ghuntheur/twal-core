import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name }) => <i className={name.includes('icon-') ? name : `icon-${name}`} />;

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
