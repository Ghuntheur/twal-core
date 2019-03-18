import React from 'react';
import PropTypes from 'prop-types';
import '@twal/styles/base/layout.scss';

const OneThirdLayout = ({ Small, Big, smallFirst }) => (
  <div className="column-container">
    <h1>{smallFirst ? 'true' : 'false'}</h1>
    <div className="panel-one">{smallFirst ? <Small /> : <Big />}</div>
    <div className="panel-two">{smallFirst ? <Big /> : <Small />}</div>
  </div>
);

OneThirdLayout.propTypes = {
  Small: PropTypes.func.isRequired,
  Big: PropTypes.func.isRequired,
  smallFirst: PropTypes.bool
};

OneThirdLayout.defaultProps = {
  smallFirst: true
};

export default OneThirdLayout;
