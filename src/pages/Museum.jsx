import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { createSubRoutes } from '@twal/components/nav/createSubRoutes';
import OneFourthLayout from '@twal/components/layouts/OneFourthLayout';
import Scrollable from '@twal/components/ui/Scrollable';

import BaseComponent from '../components/Museum/BaseComponent';
import SideMenu from '@twal/components/nav/SideMenu';

const Museum = ({ t }) => {
  const [Routes, links] = createSubRoutes('/museum', BaseComponent, 20);

  const Timeline = () => (
    <Scrollable style={{ width: 60 }}>
      <SideMenu links={links} type="timeline" name="Menu exemple" />
    </Scrollable>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Scrollable style={{ background: 'red', width: '300px', height: '100vh' }}>
        <ul>
          {links.map(link => (
            <li style={{ margin: '40px 0' }} key={link.key}>
              {link}
            </li>
          ))}
        </ul>
      </Scrollable>
      <div style={{ background: 'blue', width: 500 }}>
        <Routes />
      </div>
    </div>
  );

  // return <OneFourthLayout Small={timeline} Big={Routes} />;
};

Museum.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Museum);
