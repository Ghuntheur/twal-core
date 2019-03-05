import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

import Loader from '@twal/components/ui/Loader';

import App from 'App';

import '@twal/config/i18n.config';
import '@twal/styles/index.scss';

class Twal extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    );
  }
}

export default Twal;
