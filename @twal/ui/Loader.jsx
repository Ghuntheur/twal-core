import React from 'react';

import '@twal/styles/ui/loader';

const Loader = () => (
  <div className="loader-container full">
    <div class="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
