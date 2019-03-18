import React from 'react';
import { withTranslation } from 'react-i18next';

import { createSubRoutes } from '@twal/components/nav/createSubRoutes';

import OneThirdLayout from '@twal/components/layouts/OneThird';
import Scrollable from '@twal/components/ui/Scrollable';

import { COMPONENTS } from '../components/history/components';

import '../styles/index.scss';

const History = ({ t, match }) => {
  const [Routes, links] = createSubRoutes(match, COMPONENTS);

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

export default withTranslation()(History);
