import React from 'react';
import PropTypes from 'prop-types';
import '@twal/styles/base/layout.scss';

const OneFourthLayout = ({ Small, Big, smallFirst }) => (
  <div className="column-container">
    <div className="panel-one">{smallFirst ? <Small /> : <Big />}</div>
    <div className="panel-four">{smallFirst ? <Big /> : <Small />}</div>
  </div>
);

OneFourthLayout.propTypes = {
  Small: PropTypes.func.isRequired,
  Big: PropTypes.func.isRequired,
  smallFirst: PropTypes.bool
};

OneFourthLayout.defaultValues = {
  smallFirst: true
};

export default OneFourthLayout;
