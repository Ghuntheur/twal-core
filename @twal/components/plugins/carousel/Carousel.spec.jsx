import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './Carousel';

describe('Carousel', () => {
  it('renders a Slider component', () => {
    const wrap = shallow(<Carousel />);
    expect(wrap.find('Slider')).toHaveLength(1);
  });
});
