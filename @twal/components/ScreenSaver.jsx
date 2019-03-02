import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import IdleTimer from 'react-idle-timer';

import { withTranslation } from 'react-i18next';

const ScreenSaver = ({ children, timeout, unit }) => {
  const idleTimer = useRef(null);
  const [isIdle, setIdle] = useState(false);

  const time = 1000 * timeout * (unit === 'min' ? 60 : 1) || 1000 * 60;

  return (
    <IdleTimer
      ref={idleTimer}
      element={document}
      timeout={time}
      onIdle={() => setIdle(true)}
      onAction={() => setIdle(false)}
    >
      {isIdle &&
        (children || (
          <div>
            <h1>par défaut</h1>
          </div>
        ))}
    </IdleTimer>
  );
};

ScreenSaver.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  timeout: PropTypes.number,
  unit: PropTypes.oneOf(['s', 'min'])
};

ScreenSaver.defaultProps = {
  unit: 'min'
};

export default withTranslation()(ScreenSaver);
