import React from 'react';
import PropTypes from 'prop-types';

const CustomScreenSaver = ({ isIdle }) => (
  <h1>{isIdle ? 'idle' : 'not idle'} Un screen saver custom</h1>
);

CustomScreenSaver.propTypes = {
  isIdle: PropTypes.bool.isRequired
};

export default CustomScreenSaver;
