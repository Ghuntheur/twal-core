import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeButton = ({ content }) => {
  return (
    <div>
      <Link to="lel">le bouton</Link>
    </div>
  );
};

HomeButton.propTypes = {
  content: PropTypes.node
};

HomeButton.defaultProps = {
  content: 'Home'
};

export default HomeButton;
