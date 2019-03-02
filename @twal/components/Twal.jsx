import React, { Suspense } from 'react';
import propTypes from 'prop-types';
import IdleTimer from 'react-idle-timer';

import Loader from '@twal/ui/Loader';
import ScreenSaver from '@twal/components/ScreenSaver';

import '@twal/config/i18n.config';

import '@twal/styles/index';

class Twal extends React.Component {
  constructor() {
    super();
    this.idleTimer = null;

    this.state = {
      isIdle: false
    };
  }

  render() {
    const { isIdle } = this.state;
    return (
      <Suspense fallback={<Loader />}>
        <IdleTimer
          ref={el => (this.idleTimer = el)}
          element={document}
          timeout={1000 * 3}
          onIdle={() => this.setState({ isIdle: true })}
          onAction={() => this.setState({ isIdle: false })}
        >
          {isIdle && <ScreenSaver />}
        </IdleTimer>
      </Suspense>
    );
  }
}

Twal.propTypes = {
  children: propTypes.element.isRequired
};

export default Twal;
