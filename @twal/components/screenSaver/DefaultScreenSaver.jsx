import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

import '@twal/styles/components/screenSaver/screenSaver.scss';

const DefaultScreenSaver = ({ icon, text }) => {
  const duration = 200;

  const defaultStyle = {
    opacity: 0,
    transition: `opacity ${duration}ms ease`
  };

  const transitionStyle = {
    entering: { opacity: 0 },
    entered: { opacity: 1 }
  };

  return (
    <Transition timeout={duration} appear={true} in={true}>
      {state => (
        <div className="screen-saver" style={{ ...defaultStyle, ...transitionStyle[state] }}>
          <div className="screen-saver__main">
            <div className="img-container">{icon}</div>
            <h3 className="mt-2">{text}</h3>
          </div>
        </div>
      )}
    </Transition>
  );
};

DefaultScreenSaver.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element
};

DefaultScreenSaver.defaultProps = {
  text: 'Mise en veille',
  icon: <img src="https://picsum.photos/200" alt="icon" />
};

export default DefaultScreenSaver;
