import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Page = ({ children, className }) => (
  <div className={classnames('page', className)}>{children}</div>
);

Page.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

export default Page;
