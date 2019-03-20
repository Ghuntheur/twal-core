import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { throwError } from '@twal/utils/CommonUtils';

import '@twal/styles/base/nav.scss';

const TYPE = {
  sidemenu: 'sidemenu',
  timeline: 'timeline'
};

const SideMenu = ({ links, name, type, className }) => {
  if (!TYPE.hasOwnProperty(type)) {
    throwError(`Type ${type} is not a SideMenu type.`);
  }
  return (
    <section className={classnames('side-menu', 'panel', className, type)}>
      {name && <h2>{name}</h2>}
      <ul>
        {links.map(link => (
          <li key={link.key}>
            {type === TYPE.timeline && <div className="tick" />}
            {link}
          </li>
        ))}
      </ul>
    </section>
  );
};

SideMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
};

export default SideMenu;
