import React from 'react';
import Slider from 'react-slick';

import './carousel.scss';

/*
 * Component Carousel is based on react-slick
 * All props and methods can be found here: https://react-slick.neostack.com/docs/api/
 */
export default class Carousel extends React.Component {
  render() {
    return <Slider {...this.props.settings}>{this.props.children}</Slider>;
  }
}
