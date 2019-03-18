import React from 'react';
import PropTypes from 'prop-types';
import { SubRoute1, SubRoute2, SubRoute3, SubRoute4 } from 'components/Test/Test';

import { createSubRoutes } from '@twal/components/nav/createSubRoutes';

const Rooms = ({ match }) => {
  const components = [SubRoute1, SubRoute2, SubRoute3, SubRoute4];
  const [Routes, links] = createSubRoutes(match, components);

  return (
    <>
      <Routes />
      {links}
    </>
  );
};

Rooms.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired
};

export default Rooms;
