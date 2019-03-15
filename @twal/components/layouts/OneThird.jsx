import React from 'react';
import '@twal/styles/base/layout.scss';

const OneThirdLayout = ({ Small, Big, smallFirst }) => (
  <div className="column-container">
    {smallFirst && (
      <div className="one">
        <Small />
      </div>
    )}
    <div className="two">
      <Big />
    </div>
    {!smallFirst && (
      <div className="one">
        <Small />
      </div>
    )}
  </div>
);

export default OneThirdLayout;
