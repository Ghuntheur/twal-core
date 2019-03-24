import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import uniqid from 'uniqid';
import classnames from 'classnames';

import '@twal/styles/vendors/gallery.scss';
/*
 * Component Gallery is based on react-images
 * All props and methods can be found here: http://jossmac.github.io/react-images/
 */
class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  };

  closeLightbox = () =>
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });

  gotoPrevious = () => this.setState({ currentImage: this.state.currentImage - 1 });

  gotoNext = () => this.setState({ currentImage: this.state.currentImage + 1 });

  gotoImage = index => this.setState({ currentImage: index });

  handleClickImage = () => {
    if (this.props.images.length === 1) {
      this.closeLightbox();
      return;
    }
    if (this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  };

  renderGallery = () => {
    const { images } = this.props;

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <figure key={`${uniqid()}`} className="gallery-picture">
          <a
            href={obj.src}
            className={`gallery-thumbnail gallery-${obj.orientation}`}
            onClick={e => this.openLightbox(i, e)}
          >
            <img src={obj.src} alt={obj.alt} className="gallery-source" />
          </a>
          {obj.caption && <figcaption className="legend">{obj.caption}</figcaption>}
        </figure>
      );
    });

    return <div className="gallery">{gallery}</div>;
  };

  render() {
    const { preventScroll, showThumbnails, images, className } = this.props;
    const { currentImage, lightboxIsOpen } = this.state;

    return (
      <div className={classnames('gallery-section', className)}>
        {this.renderGallery()}
        <Lightbox
          currentImage={currentImage}
          images={images}
          isOpen={lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          preventScroll={preventScroll}
          showThumbnails={showThumbnails}
          backdropClosesModal={true}
        />
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  preventScroll: PropTypes.bool.isRequired,
  showThumbnails: PropTypes.bool.isRequired
};

export default Gallery;
