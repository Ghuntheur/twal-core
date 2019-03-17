import React from 'react';
import PropTypes from 'prop-types';
import '@twal/styles/base/layout.scss';

const OneThirdLayout = ({ Small, Big, smallFirst }) => (
  <div className="column-container">
    {smallFirst && (
      <div className="panel-one">
        <Small />
      </div>
    )}
    <div className="panel-two ">
      <Big />
    </div>
    {!smallFirst && (
      <div className="panel-one">
        <Small />
      </div>
    )}
  </div>
);
OneThirdLayout.propTypes = {
  Small: PropTypes.func.isRequired,
  Big: PropTypes.func.isRequired,
  smallFirst: PropTypes.bool
};
export default OneThirdLayout;
