import React, { Suspense } from 'react';
import propTypes from 'prop-types';
import Loader from './Loader';

import '@twal/config/i18n.config';

const Twal = ({ children }) => <Suspense fallback={<Loader />}>{children}</Suspense>;

Twal.propTypes = {
  children: propTypes.element.isRequired
};

export default Twal;
