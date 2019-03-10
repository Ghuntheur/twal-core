import React from 'react';

import MainContent from '@twal/components/core/MainContent';
import MainMenus from '@twal/components/core/MainMenus';

const TwalApp = ({ ...rest }) => (
  <main>
    <MainMenus {...rest} />
    <MainContent />
  </main>
);

export default TwalApp;
