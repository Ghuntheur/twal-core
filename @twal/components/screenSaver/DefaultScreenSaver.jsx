import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Transition } from 'react-transition-group';

import AbsoluteContent from '@twal/components/ui/AbsoluteContent';

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
        <AbsoluteContent
          className="screen-saver"
          style={{ ...defaultStyle, ...transitionStyle[state] }}
        >
          <div
            className={classnames('screen-saver__main', {
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
          </div>
        </AbsoluteContent>
      )}
    </Transition>
  );
};

DefaultScreenSaver.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(DefaultScreenSaver);
