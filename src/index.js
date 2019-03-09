import React from 'react';
import ReactDOM from 'react-dom';

import Twal from '@twal/components/core/Twal';

const startApp = () => {
  ReactDOM.render(<Twal />, document.getElementById('root'));
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
