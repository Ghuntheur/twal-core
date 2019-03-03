import React from 'react';
import PropTypes from 'prop-types';

import '@twal/styles/ui/screenSaver.scss';

const DefaultScreenSaver = ({ icon, text }) => {
  return (
    <div className="screen-saver full">
      <div className="screen-saver__main full">
        <div className="screen-saver__main img-container mb-2">{icon}</div>
        <h3 className="mt-2">{text}</h3>
      </div>
    </div>
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
