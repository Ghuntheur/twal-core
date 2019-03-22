import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { createSubRoutes } from '@twal/components/nav/createSubRoutes';
import OneFourthLayout from '@twal/components/layouts/OneFourthLayout';

import BaseComponent from '../components/Museum/BaseComponent';
import SideMenu from '@twal/components/nav/SideMenu';

const Museum = ({ t }) => {
  const [Routes, links] = createSubRoutes('/museum', BaseComponent, 20);

  const Timeline = () => <SideMenu links={links} type="timeline" name="Menu exemple" />;

  return <OneFourthLayout Small={Timeline} Big={Routes} />;
};

Museum.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Museum);
