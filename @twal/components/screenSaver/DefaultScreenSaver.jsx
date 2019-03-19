import React from 'react';
import classnames from 'classnames';
import TwalLogo from './../../public/imgs/twal.svg';

import '@twal/styles/components/screenSaver/screenSaver.scss';

import twalConfig from '@root/twal.config';
import { useTranslation } from 'react-i18next';

const DefaultScreenSaver = () => {
  const { screenSaver: { animationEnabled, backgroundImage, namespace } = {} } = twalConfig;

  const { t } = useTranslation(namespace || 'common');

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

export default DefaultScreenSaver;
