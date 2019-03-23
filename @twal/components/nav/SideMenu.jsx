import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Scrollable from '@twal/components/ui/Scrollable';

import '@twal/styles/base/nav.scss';

const SideMenu = ({ links, name, type, className }) => {
  return (
    <section className={classnames('side-menu', 'panel', className, type)}>
      {name && <h2>{name}</h2>}
      <Scrollable>
        <ul>
          {links.map(link => (
            <li key={link.key}>{link}</li>
          ))}
        </ul>
      </Scrollable>
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
