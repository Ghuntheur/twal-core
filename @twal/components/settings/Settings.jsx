import React from 'react';
import PropTypes from 'prop-types';

import Languages from '@twal/components/languages/Languages';

import '@twal/styles/components/nav/settings.scss';

const Settings = ({ toggle }) => {
  return (
    <section className="settings">
      <Languages />
    </section>
  );
};

Settings.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default Settings;
