import React, { Suspense } from 'react';

import Loader from '@twal/ui/Loader';

import '@twal/config/i18n.config';

import App from 'App';
import '@twal/styles/index';

const Twal = () => {
  return (
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  );
};

export default Twal;
