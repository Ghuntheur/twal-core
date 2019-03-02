import React, { Suspense } from 'react';

import Loader from '@twal/ui/Loader';

import App from 'App';

import '@twal/config/i18n.config';
import '@twal/styles/index';

class Twal extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    );
  }
}

export default Twal;
