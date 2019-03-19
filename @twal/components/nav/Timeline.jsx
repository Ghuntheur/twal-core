import React from 'react';
import '@twal/styles/base/timeline.scss';

const Timeline = ({ links }) => (
  <ul className="timeline">
    {links.map(link => (
      <li key={link.key}>
        <div className="tick" />
        {link}
      </li>
    ))}
  </ul>
);

export default Timeline;
