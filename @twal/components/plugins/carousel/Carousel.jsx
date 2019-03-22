import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import '@twal/styles/vendors/carousel.scss';

/*
 * Component Carousel is based on react-slick
 * All props and methods can be found here: https://react-slick.neostack.com/docs/api/
 */
const Carousel = ({ children, ...rest }) => <Slider {...rest}>{children}</Slider>;

Carousel.propTypes = {
  children: PropTypes.node.isRequired
};
