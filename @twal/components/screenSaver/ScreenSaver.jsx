import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import IdleTimer from 'react-idle-timer';
import { CSSTransition } from 'react-transition-group';

import { withTranslation } from 'react-i18next';
import DefaultScreenSaver from './DefaultScreenSaver';

import twalConfig from '@root/twal.config';

const ScreenSaver = ({ timeout, unit, toggleScreenSaver }) => {
  const idleTimer = useRef(null);
  const [isIdle, setIdle] = useState(false);

  const time = 1000 * timeout * (unit === 'min' ? 60 : 1) || 1000 * 60;

  const {
    screenSaver: { component }
  } = twalConfig;

  const ScreenSaverComponent = component
    ? require(`@root/src/${component.replace(/^\//, '')}.jsx`).default
    : DefaultScreenSaver;

  return (
    <IdleTimer
      ref={idleTimer}
      element={document}
      timeout={time}
      onIdle={() => {
        setIdle(true);
        toggleScreenSaver(true);
      }}
      onActive={() => {
        setIdle(false);
        toggleScreenSaver(false);
      }}
    >
      <CSSTransition in={isIdle} timeout={300} classNames="test" unmountOnExit>
        <ScreenSaverComponent isIdle={isIdle} />
      </CSSTransition>
    </IdleTimer>
  );
};

ScreenSaver.propTypes = {
  timeout: PropTypes.number,
  unit: PropTypes.oneOf(['s', 'min']),
  t: PropTypes.func.isRequired,
  toggleScreenSaver: PropTypes.func.isRequired
};

ScreenSaver.defaultProps = {
  unit: 'min'
};

export default withTranslation()(ScreenSaver);
