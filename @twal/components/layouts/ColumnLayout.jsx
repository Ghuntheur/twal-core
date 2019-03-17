import React from 'react';
import PropTypes from 'prop-types';

import '@twal/styles/base/layout.scss';
import classnames from 'classnames';

const column = children => {
  return children.map((child, index) => (
    <div key={'col-' + new Date().getTime() + '-' + index} className="panel-one">
      {child}
    </div>
  ));
};

const ColumnLayout = ({ children, classNames, ...rest }) => {
  return (
    <section className={classnames('column-container', classNames)}>{column(children)}</section>
  );
};

ColumnLayout.propTypes = {
  children: PropTypes.array.isRequired
};

export default ColumnLayout;
