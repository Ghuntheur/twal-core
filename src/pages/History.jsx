import React from 'react';
import { withTranslation } from 'react-i18next';

import { createSubRoutes } from '@twal/components/nav/createSubRoutes';

import OneThirdLayout from '@twal/components/layouts/OneThird';
import Scrollable from '@twal/components/ui/Scrollable';

import BaseComponent, { COMPONENTS } from '../components/history/components';

import '../styles/index.scss';

const History = ({ t }) => {
  const [Routes, links] = createSubRoutes('/history', BaseComponent, 5);

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
