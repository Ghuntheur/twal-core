import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '@twal/styles/components/ui/absoluteContent.scss';

const AbsoluteContent = ({ children, className, ...rest }) => (
  <div className={classnames('absolute-content', className)} {...rest}>
    {children}
  </div>
);

AbsoluteContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};

export default AbsoluteContent;
