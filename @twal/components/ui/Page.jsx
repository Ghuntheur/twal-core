import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => (
  <div style={{ background: 'red' }} className="page full">
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.any.isRequired
};

export default Page;
