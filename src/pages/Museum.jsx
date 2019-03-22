import React from 'react';

import { createSubRoutes } from '@twal/components/nav/createSubRoutes';
import OneFourthLayout from '@twal/components/layouts/OneFourthLayout';
import Scrollable from '@twal/components/ui/Scrollable';

import BaseComponent from '../components/Museum/BaseComponent';
import SideMenu from '@twal/components/nav/SideMenu';

const Museum = () => {
  const [Routes, links] = createSubRoutes('/museum', BaseComponent, 4);

  const timeline = () => (
    <Scrollable>
      <SideMenu links={links} type="timeline" name="Menu exemple" />
    </Scrollable>
  );

  return <OneFourthLayout Small={timeline} Big={Routes} />;
};

export default Museum;
