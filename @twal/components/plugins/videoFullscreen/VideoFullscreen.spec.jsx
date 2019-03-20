import React from 'react';
import { shallow } from 'enzyme';
import VideoFullscreen from './VideoFullscreen';

describe('VideoFullscreen', () => {
  it('renders a Player component', () => {
    const wrap = shallow(<VideoFullscreen />);
    expect(wrap.find('Player')).toHaveLength(1);
  });
});
