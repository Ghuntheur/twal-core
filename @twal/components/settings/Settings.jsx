import React from 'react';

import Languages from '@twal/components/languages/Languages';

import '@twal/styles/components/nav/settings.scss';

const Settings = ({ toggle, t }) => {
  return (
    <section className="settings">
      <Languages />
    </section>
  );
};

export default Settings;
