import React from 'react';
import classnames from 'classnames';

import '@twal/styles/base/nav.scss';

const Timeline = ({ links, name, className }) => (
  <section className={classnames('timeline', 'panel', className)}>
    <h2>{name}</h2>
    <ul>
      {links.map(link => (
        <li key={link.key}>
          <div className="tick" />
          {link}
        </li>
      ))}
    </ul>
  </section>
);

export default Timeline;
