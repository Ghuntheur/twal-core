import React, { Suspense } from 'react';
import propTypes from 'prop-types';

import Loader from '@twal/ui/Loader';
import ScreenSaver from '@twal/components/ScreenSaver';

import '@twal/config/i18n.config';

import '@twal/styles/index';

const Twal = ({ children }) => (
  <Suspense fallback={<Loader />}>
    <ScreenSaver />
    <Loader />
  </Suspense>
);

Twal.propTypes = {
  children: propTypes.element.isRequired
};

export default Twal;
