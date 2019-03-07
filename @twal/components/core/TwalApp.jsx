import React from 'react';

import MainNav from '@twal/components/nav/MainNav';
import MainContent from '@twal/components/core/MainContent';

class TwalApp extends React.Component {
  render() {
    return (
      <main>
        <MainNav />
        <MainContent />
      </main>
    );
  }
}

export default TwalApp;
