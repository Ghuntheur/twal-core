import React from 'react';

const Quote = ({ content, author }) => (
  <blockquote className="quote" cite="">
    <p className="quote-content">{content}</p>
    <p className="quote-author">{author}</p>
  </blockquote>
);

export default Quote;
