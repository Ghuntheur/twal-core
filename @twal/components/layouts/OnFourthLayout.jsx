import React from 'react';
import PropTypes from 'prop-types';
import '@twal/styles/base/layout.scss';

const OneFourthLayout = ({ Small, Big, smallFirst = true }) => (
  <div className="column-container">
    {smallFirst && (
      <div className="panel-one">
        <Small />
      </div>
    )}
    <div className="panel-four">
      <Big />
    </div>
    {!smallFirst && (
      <div className="panel-one">
        <Small />
      </div>
    )}
  </div>
);

OneFourthLayout.propTypes = {
  Small: PropTypes.func.isRequired,
  Big: PropTypes.func.isRequired,
  smallFirst: PropTypes.bool
};

export default OneFourthLayout;
