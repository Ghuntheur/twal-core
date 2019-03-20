import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { createSubRoutes } from '@twal/components/nav/createSubRoutes';
import OneFourthLayout from '@twal/components/layouts/OneFourthLayout';
import Scrollable from '@twal/components/ui/Scrollable';

import BaseComponent from '../components/Museum/BaseComponent';
import BottomNav from '@twal/components/nav/BottomNav';
import SideMenu from '@twal/components/nav/SideMenu';

const Museum = ({ t }) => {
  const [Routes, links] = createSubRoutes('/museum', BaseComponent, 5);

  const Links = () => (
    <Scrollable>
      <ul>
        {links.map(link => (
          <li key={link.key}>{link}</li>
        ))}
      </ul>
    </Scrollable>
  );

  const timeline = () => (
    <Scrollable>
      <SideMenu links={links} name="Menu exemple" type="timeline" />
    </Scrollable>
  );

  return (
    <>
      <BottomNav links={links.slice(0, 5)} />
      <OneFourthLayout Small={timeline} Big={Routes} />
    </>
  );
};

Museum.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Museum);
