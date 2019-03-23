import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import '@twal/styles/base/layout.scss';
import classnames from 'classnames';

const ColumnLayout = ({ children, classNames, ...rest }) => {
  const column = children => {
    return children.map(child => (
      <div key={`${uniqid()}`} className="panel-one">
        {child}
      </div>
    ));
  };

  return (
    <section className={classnames('column-container', classNames)} {...rest}>
      {column(children)}
    </section>
  );
};

ColumnLayout.propTypes = {
  children: PropTypes.array.isRequired,
  classNames: PropTypes.string
};

export default ColumnLayout;
