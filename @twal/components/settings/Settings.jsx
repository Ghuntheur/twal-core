import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@twal/components/ui/IconButton';
import AbsoluteContent from '@twal/components/ui/AbsoluteContent';

const Settings = ({ settingsOpened, setOpen }) => {
  return (
    <div className="main-settings">
      <IconButton
        icon="cog-1"
        onClick={() => setOpen(!settingsOpened)}
        className="button__settings"
      />
      {settingsOpened && (
        <AbsoluteContent className="settings">
          <h1>Settings 1</h1>
          <h1>Settings 2</h1>
        </AbsoluteContent>
      )}
    </div>
  );
};

Settings.propTypes = {
  settingsOpened: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Settings;
