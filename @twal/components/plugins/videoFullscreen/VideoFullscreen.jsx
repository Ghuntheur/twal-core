import React from 'react';
import { Player, BigPlayButton } from 'video-react';

import '@twal/styles/vendors/videoFullscreen.scss';

/*
 * Component VideoFullScreen is based on Video-React
 * All props and methods can be found here: https://video-react.js.org/components/player/
 */
const VideoFullScreen = ({ ...rest }) => (
  <div className="video-container">
    <Player {...rest}>
      <BigPlayButton position="center" />
    </Player>
  </div>
);

export default VideoFullScreen;
