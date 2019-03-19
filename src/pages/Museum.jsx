import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { createSubRoutes } from '@twal/components/nav/createSubRoutes';
import OneFourthLayout from '@twal/components/layouts/OneFourthLayout';
import Scrollable from '@twal/components/ui/Scrollable';

import BaseComponent from '../components/Museum/BaseComponent';
import Timeline from '@twal/components/nav/Timeline';
import BottomNav from '@twal/components/nav/BottomNav';

const Museum = ({ t }) => {
  const [Routes, links] = createSubRoutes('/museum', BaseComponent, 12);

  const Links = () => (
    <Scrollable>
      <ul>
        {links.map(link => (
          <li key={link.key}>{link}</li>
        ))}
      </ul>
    </Scrollable>
  );

  // links.map(link => console.log(link));

  const test = () => (
    <Scrollable>
      <Timeline name="Timeline" links={links} />
    </Scrollable>
  );

  return (
    <>
      <BottomNav links={links.slice(0,3)} />
      <OneFourthLayout Small={test} Big={Routes} />
    </>
  );
};

Museum.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Museum);
