import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Icon from './Icon';

import '@twal/styles/components/nav/iconButton.scss';

const IconButton = ({ icon, className, ...rest }) => (
  <div className={classnames('button', 'button-icon', className)} {...rest}>
    <Icon name={icon} />
  </div>
);

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default IconButton;
