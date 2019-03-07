import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import HomeButton from './HomeButton';

import twalConfig from '@root/twal.config';

const MainNav = ({ namespace }) => {
  const { routes } = twalConfig;
  const { t } = useTranslation(namespace);

  const [isOpened, setOpen] = useState(false);

  return (
    <>
      <HomeButton onClick={() => setOpen(!isOpened)} />
      {isOpened && (
        <nav>
          <ul>
            {routes.map(route => (
              <li key={route.component} onClick={() => setOpen(!isOpened)}>
                <NavLink to={`/${route.component.toLowerCase()}`}>{t(route.contentKey)}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

MainNav.propTypes = {
  namespace: PropTypes.string,
  LinkComponent: PropTypes.func
};

MainNav.defaultProps = {
  namespace: 'common'
};

export default MainNav;
