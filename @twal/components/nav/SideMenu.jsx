import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '@twal/styles/base/nav.scss';

const SideMenu = ({ links, name, type, className }) => {
  return (
    <section className={classnames('side-menu', 'panel', className, type)}>
      {name && <h2>{name}</h2>}
      <ul>
        {links.map(link => (
          <li key={link.key}>
            {/* {type === 'timeline' && <div className="tick" />} */}
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
  type: PropTypes.oneOf(['sidemenu', 'timeline']),
  className: PropTypes.string
};

SideMenu.defaultProps = {
  type: 'sidemenu'
};

export default SideMenu;
