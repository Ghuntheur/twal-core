import React from 'react';
import ReactDOM from 'react-dom';

import Twal from '@twal/components/core/Twal';

const bootstrap = (Component = Twal) => {
  const startApp = () => {
    ReactDOM.render(<Component />, document.getElementById('root'));
  };

  if (window.cordova) {
    document.addEventListener('deviceready', startApp, false);
  } else {
    startApp();
  }
};

export { bootstrap };
