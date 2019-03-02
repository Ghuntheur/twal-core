import React from 'react';
import ScreenSaver from '@twal/components/ScreenSaver';

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
