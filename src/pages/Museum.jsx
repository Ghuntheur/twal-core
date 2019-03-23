import React from 'react';

import { createSubRoutes } from '@twal/components/nav/createSubRoutes';
import OneFourthLayout from '@twal/components/layouts/OneFourthLayout';

import BaseComponent from '../components/Museum/BaseComponent';
import SideMenu from '@twal/components/nav/SideMenu';

const Museum = () => {
  const [Routes, links] = createSubRoutes('/museum', BaseComponent, 4);

  const Timeline = () => <SideMenu links={links} type="timeline" name="Menu exemple" />;

  return <OneFourthLayout Small={Timeline} Big={Routes} />;
};

export default Museum;
