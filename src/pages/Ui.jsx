import React from 'react';
import IconButton from '@twal/components/ui/IconButton';
import Carousel from '@twal/components/plugins/carousel/Carousel';
import VideoFullscreen from '@twal/components/plugins/videoFullscreen/VideoFullscreen';

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
  </section>
);

export default Ui;
