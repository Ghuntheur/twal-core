import React from 'react';
import { Player } from 'video-react';

import './videoFullscreen.scss';

/*
 * Component VideoFullScreen is based on Video-React
 * All props and methods can be found here: https://video-react.js.org/components/player/
 */
export default class VideoFullScreen extends React.Component {
  render() {
    return <Player {...this.props.settings} />;
  }
}
