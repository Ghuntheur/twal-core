import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import Twal from '@twal/components/Twal';

const startApp = () => {
  ReactDOM.render(
    <Twal>
      <App />
    </Twal>,
    document.getElementById('root')
  );
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
