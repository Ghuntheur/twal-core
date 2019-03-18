import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => <div className="page">{children}</div>;

Page.propTypes = {
  children: PropTypes.any.isRequired
};

export default Page;
