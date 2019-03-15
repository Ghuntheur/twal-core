import React from 'react';
import '@twal/styles/base/layout.scss';

const OneFourthLayout = ({ Small, Big, smallFirst = true }) => (
  <div className="column-container">
    {smallFirst && (
      <div className="one">
        <Small />
      </div>
    )}
    <div className="four">
      <Big />
    </div>
    {!smallFirst && (
      <div className="one">
        <Small />
      </div>
    )}
  </div>
);

export default OneFourthLayout;
