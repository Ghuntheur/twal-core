import React from 'react';
import ScreenSaver from './ScreenSaver';

/**
 * Return a component with screenSaver
 * @param {Object} options
 * @param {number} options.timeout
 * @param {string} options.unit
 */
const withScreenSaver = options => BaseComponent => {
  class WithScreenSaver extends React.Component {
    render() {
      return (
        <>
          <ScreenSaver {...options} />
          <BaseComponent />
        </>
      );
    }
  }
  return WithScreenSaver;
};

export default withScreenSaver;
