import React, { Suspense } from 'react';
import { HashRouter, Switch } from 'react-router-dom';

import Loader from '@twal/components/ui/Loader';

import App from 'App';

import '@twal/config/i18n.config';
import '@twal/styles/index.scss';

class Twal extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <HashRouter>
          <Switch>
            <App />
          </Switch>
        </HashRouter>
      </Suspense>
    );
  }
}

export default Twal;
