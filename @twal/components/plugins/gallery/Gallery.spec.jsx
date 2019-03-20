import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

describe('Gallery', () => {
  it('renders a Lightbox component', () => {
    const wrap = shallow(<Gallery />);
    expect(wrap.find('Lightbox')).toHaveLength(1);
  });
});
