import React, { useState } from 'react';
import ScreenSaver from './ScreenSaver';

/**
 * Return a component with screenSaver
 * @param {Object} options
 * @param {number} options.timeout
 * @param {string} options.unit
 */
const withScreenSaver = options => BaseComponent => {
  const WithScreenSaver = () => {
    const [screenSaverPrinted, setScreenSaverPrinted] = useState(false);

    const toggleScreenSaver = value => setScreenSaverPrinted(value);

    return (
      <>
        <ScreenSaver toggleScreenSaver={toggleScreenSaver} {...options} />
        <BaseComponent screenSaverPrinted={screenSaverPrinted} />
      </>
    );
  };

  return WithScreenSaver;
};

export default withScreenSaver;
