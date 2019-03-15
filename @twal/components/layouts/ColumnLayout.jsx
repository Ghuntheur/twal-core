import React from 'react';
import PropTypes from 'prop-types';

const column = children => {
  return children.map((child, index) => (
    <div key={'col-' + new Date().getTime() + '-' + index} className="panel-equal">
      {child}
    </div>
  ));
};

const ColumnLayout = ({ children }) => {
  return <section className="column-container">{column(children)}</section>;
};

ColumnLayout.propTypes = {
  children: PropTypes.array.isRequired
};

export default ColumnLayout;
