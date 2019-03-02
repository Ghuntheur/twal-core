import React, { Suspense } from 'react';

import Loader from '@twal/ui/Loader';
import DefaultScreenSaver from '@twal/screenSaver/DefaultScreenSaver';

import App from 'App';

import '@twal/config/i18n.config';
import '@twal/styles/index.scss';

class Twal extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <App />
        <DefaultScreenSaver />
      </Suspense>
    );
  }
}

export default Twal;
