import React, { useState } from 'react';
import IconButton from '../ui/IconButton';
import AbsoluteContent from '../ui/AbsoluteContent';
import Languages from '../languages/Languages';

const Settings = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <div className="main-settings">
      <IconButton icon="cog-1" onClick={() => setOpened(!isOpened)} className="button__settings" />
      {isOpened && (
        <AbsoluteContent className="settings">
          <Languages />
        </AbsoluteContent>
      )}
    </div>
  );
};

export default Settings;
