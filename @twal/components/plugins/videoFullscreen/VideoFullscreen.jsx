import React from 'react';
import { Player } from 'video-react';

import '@twal/styles/vendors/videoFullscreen.scss';

/*
 * Component VideoFullScreen is based on Video-React
 * All props and methods can be found here: https://video-react.js.org/components/player/
 */
const VideoFullScreen = ({ ...rest }) => <Player {...rest} />;

export default VideoFullScreen;
