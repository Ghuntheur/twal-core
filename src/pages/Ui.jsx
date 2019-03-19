import React from 'react';
import IconButton from '@twal/components/ui/IconButton';
import Carousel from '@twal/components/plugins/carousel/Carousel';
import VideoFullscreen from '@twal/components/plugins/videoFullscreen/VideoFullscreen';
import Gallery from '@twal/components/plugins/gallery/Gallery';

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
  poster: '../assets/img/poster.jpg',
  src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
};

const lightboxImages = [
  { src: 'http://wallpoper.com/images/00/44/65/60/sunshine-ocean_00446560.jpg' }
];

const Ui = () => (
  <section>
    <h1>UI kit default</h1>

    <IconButton icon="cancel" className="btn-icon" />
    <IconButton icon="cog" className="btn-icon" />

    <Carousel settings={carouselProps}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Carousel>

    <VideoFullscreen settings={videoFullScreenProps} />
    <Gallery images={lightboxImages} />
  </section>
);

export default Ui;
