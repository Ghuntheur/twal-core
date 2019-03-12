import React from 'react';

import Languages from '@twal/components/languages/Languages';
import IconButton from '@twal/components/ui/IconButton';

import '@twal/styles/components/nav/settings.scss';

const Settings = ({ toggle, t }) => {
  return (
    <section className="settings">
      <Languages />
      <IconButton
        icon="cancel"
        onClick={() => toggle('navOpened')}
        className="cancel"
      />
    </section>
  );
};

export default Settings;
