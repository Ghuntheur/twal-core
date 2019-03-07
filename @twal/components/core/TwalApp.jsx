import React from 'react';

import MainNav from '@twal/components/nav/MainNav';
import Settings from '@twal/components/settings/Settings';
import MainContent from '@twal/components/core/MainContent';

class TwalApp extends React.Component {
  render() {
    return (
      <main>
        <MainNav {...this.props} />
        <MainContent {...this.props} />
        <Settings />
      </main>
    );
  }
}

export default TwalApp;
