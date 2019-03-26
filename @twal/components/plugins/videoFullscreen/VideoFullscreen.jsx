import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import PropTypes from 'prop-types';

import '@twal/styles/vendors/videoFullscreen.scss';

/*
 * Component VideoFullScreen is based on Video-React
 * All props and methods can be found here: https://video-react.js.org/components/player/
 */
const VideoFullScreen = ({ children, ...rest }) => (
  <div className="video-container">
    <Player {...rest}>
      <BigPlayButton position="center" />
      {children}
    </Player>
  </div>
);

VideoFullScreen.propTypes = {
  children: PropTypes.node
};

export default VideoFullScreen;
