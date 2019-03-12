import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Transition } from 'react-transition-group';

import '@twal/styles/components/screenSaver/screenSaver.scss';

import twalConfig from '@root/twal.config';
import { withTranslation } from 'react-i18next';

const DefaultScreenSaver = ({ t }) => {
  const duration = 200;

  const defaultStyle = {
    opacity: 0,
    transition: `opacity ${duration}ms ease`
  };

  const transitionStyle = {
    entering: { opacity: 0 },
    entered: { opacity: 1 }
  };

  const {
    screenSaver: { animationEnabled, backgroundImage }
  } = twalConfig;

  return (
    <Transition timeout={duration} appear={true} in={true}>
      {state => (
        <section
          className={classnames('screensaver', {
            'with-background': backgroundImage !== undefined
          })}
          style={{
            ...(backgroundImage && {
              backgroundImage: `url(${backgroundImage.replace(/^\//, '')})`
            })
          }}
        >
          {(animationEnabled || animationEnabled === undefined) && (
            <div className="animation-container with-icon">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
            </div>
          )}
          <div className="text-container">
            <p>{t('screenSaver')}</p>
          </div>
          <img src="imgs/twal.svg" alt="twal logo" />
        </section>
      )}
    </Transition>
  );
};

DefaultScreenSaver.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(DefaultScreenSaver);
