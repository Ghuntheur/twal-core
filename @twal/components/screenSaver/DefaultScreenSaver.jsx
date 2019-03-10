import React from 'react';
import { Transition } from 'react-transition-group';

import AbsoluteContent from '@twal/components/ui/AbsoluteContent';

import '@twal/styles/components/screenSaver/screenSaver.scss';

const DefaultScreenSaver = () => {
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
        <AbsoluteContent
          className="screen-saver"
          style={{ ...defaultStyle, ...transitionStyle[state] }}
        >
          <div className="screen-saver__main">
            <div className="animation-container">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
            </div>
          </div>
        </AbsoluteContent>
      )}
    </Transition>
  );
};

export default DefaultScreenSaver;
