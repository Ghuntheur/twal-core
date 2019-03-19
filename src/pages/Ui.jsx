import React from 'react';
import IconButton from '@twal/components/ui/IconButton';
import Carousel from '@twal/components/plugins/carousel/Carousel';
import VideoFullscreen from '@twal/components/plugins/videoFullscreen/VideoFullscreen';
import Gallery from '@twal/components/plugins/gallery/Gallery';

import '../styles/index.scss';

const carouselProps = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const videoFullScreenProps = {
  playsInline: true,
  fluid: false,
  width: 640,
  src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
};

const lightboxImages = [
  {
    src: 'http://wallpoper.com/images/00/44/65/60/sunshine-ocean_00446560.jpg',
    orientation: 'landscape'
  },
  {
    src: 'http://wallpoper.com/images/00/44/65/60/sunshine-ocean_00446560.jpg',
    orientation: 'landscape'
  },
  {
    src: 'http://wallpoper.com/images/00/44/65/60/sunshine-ocean_00446560.jpg',
    orientation: 'landscape'
  },
  {
    src: 'http://wallpoper.com/images/00/44/65/60/sunshine-ocean_00446560.jpg',
    orientation: 'landscape'
  }
];

const Ui = () => (
  <section>
    <h1>UI kit default</h1>

    <IconButton icon="cancel" className="btn-icon" />
    <IconButton icon="cog" className="btn-icon" />

    <div className="ui__carousel">
      <Carousel settings={carouselProps}>
        {lightboxImages.map(img => (
          <Gallery images={[img]} />
        ))}
      </Carousel>
    </div>

    <VideoFullscreen settings={videoFullScreenProps} />
  </section>
);

export default Ui;
