import React, { Suspense, useState, useRef } from 'react';
import propTypes from 'prop-types';
import IdleTimer from 'react-idle-timer';

import Loader from '@twal/ui/Loader';
import ScreenSaver from '@twal/components/ScreenSaver';

import '@twal/config/i18n.config';

import '@twal/styles/index';

const Twal = ({ children }) => {
  const idleTimer = useRef(null);
  const [isIdle, setIdle] = useState(false);

  return (
    <Suspense fallback={<Loader />}>
      <IdleTimer
        ref={idleTimer}
        element={document}
        timeout={1000 * 3}
        onIdle={() => setIdle(true)}
        onAction={() => setIdle(false)}
      >
        {isIdle && <ScreenSaver />}
      </IdleTimer>
    </Suspense>
  );
};

Twal.propTypes = {
  children: propTypes.element.isRequired
};

export default Twal;
