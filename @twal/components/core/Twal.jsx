import React, { Suspense } from 'react';
import { HashRouter, Switch } from 'react-router-dom';

import Loader from '@twal/components/ui/Loader';
import TwalApp from '@twal/components/core/TwalApp';

import withScreenSaver from '@twal/components/screenSaver/withScreenSaver';

import '@twal/config/i18n.config';
import '@twal/styles/index.scss';

import twalConfig from '@root/twal.config';

class Twal extends React.Component {
  render() {
    const { screenSaver } = twalConfig;

    const Main =
      screenSaver && screenSaver.enabled
        ? withScreenSaver(screenSaver.options || {})(TwalApp)
        : TwalApp;
    return (
      <Suspense fallback={<Loader />}>
        <HashRouter>
          <Switch>
            <Main />
          </Switch>
        </HashRouter>
      </Suspense>
    );
  }
}

export default Twal;
