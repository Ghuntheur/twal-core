import React from 'react';

import '@twal/styles/ui/loader';

const Loader = () => (
  <div className="loader-container full">
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
