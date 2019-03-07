import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import IdleTimer from 'react-idle-timer';

import { withTranslation } from 'react-i18next';
import DefaultScreenSaver from './DefaultScreenSaver';

const ScreenSaver = ({ component, timeout, unit, toggleScreenSaver }) => {
  const idleTimer = useRef(null);
  const [isIdle, setIdle] = useState(false);

  const time = 1000 * timeout * (unit === 'min' ? 60 : 1) || 1000 * 60;

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
      {isIdle && (component || <DefaultScreenSaver />)}
    </IdleTimer>
  );
};

ScreenSaver.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  timeout: PropTypes.number,
  unit: PropTypes.oneOf(['s', 'min']),
  t: PropTypes.func.isRequired,
  toggleScreenSaver: PropTypes.func.isRequired
};

ScreenSaver.defaultProps = {
  unit: 'min'
};

export default withTranslation()(ScreenSaver);
