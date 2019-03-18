import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { createSubRoutes } from '@twal/components/nav/createSubRoutes';
import OneThirdLayout from '@twal/components/layouts/OneThird';
import Scrollable from '@twal/components/ui/Scrollable';

import BaseComponent from '../components/Museum/BaseComponent';

const Museum = ({ t }) => {
  const [Routes, links] = createSubRoutes('/museum', BaseComponent, 3);

  const Links = () => (
    <Scrollable>
      <ul>
        {links.map(link => (
          <li key={link.key}>{link}</li>
        ))}
      </ul>
    </Scrollable>
  );

  return <OneThirdLayout Small={Links} Big={Routes} />;
};

Museum.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Museum);
