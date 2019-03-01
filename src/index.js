import React from 'react';
import ReactDOM from 'react-dom';

import '@twal/styles/index';

import App from './App';

import '@twal/config/i18n.config';

const Loading = () => <div>load</div>;

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <App />
  </React.Suspense>,
  document.getElementById('root')
);
