import React from 'react';
import IconButton from '@twal/components/ui/IconButton';
import Carousel from '@twal/components/plugins/carousel/Carousel';

const carouselProps = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
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
  </section>
);

export default Ui;
