import React from 'react';
import classnames from 'classnames';

import '@twal/styles/base/nav.scss';
const BottomNav = ({ links, className }) => (
  <div className="bottom-nav">
    <ul>
      {links.map(link => (
        <li key={link.key}>{link}</li>
      ))}
    </ul>
  </div>
);

export default BottomNav;
