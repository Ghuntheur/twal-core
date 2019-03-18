import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ children, author }) => (
  <blockquote className="quote" cite="">
    <p className="quote-content">{children}</p>
    {author && <cite className="quote-author">{author}</cite>}
  </blockquote>
);

Quote.propTypes = {
  children: PropTypes.string.isRequired,
  author: PropTypes.string
};

export default Quote;
