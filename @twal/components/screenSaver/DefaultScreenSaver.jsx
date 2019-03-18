import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TwalLogo from './../../public/imgs/twal.svg';
import { Transition } from 'react-transition-group';

import '@twal/styles/components/screenSaver/screenSaver.scss';

import twalConfig from '@root/twal.config';
import { withTranslation } from 'react-i18next';

const DefaultScreenSaver = ({ t }) => {
  const { screenSaver: { animationEnabled, backgroundImage } = {} } = twalConfig;

  return (
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
      <img src={TwalLogo} alt="twal logo" />
    </section>
  );
};

DefaultScreenSaver.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(DefaultScreenSaver);
