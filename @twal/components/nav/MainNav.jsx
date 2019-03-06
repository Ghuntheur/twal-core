import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import HomeButton from './HomeButton';
import NavLink from './NavLink';

import twalConfig from '@root/twal.config';

const MainNav = ({ namespace }) => {
  const { routes } = twalConfig;
  const { t } = useTranslation(namespace);

  const [isOpened, setOpen] = useState(false);

  return (
    <div>
      <HomeButton onClick={() => setOpen(!isOpened)} />
      {isOpened && (
        <nav>
          <ul>
            {routes.map(route => (
              <li key={route.component} onClick={() => setOpen(!isOpened)}>
                <NavLink to={route.component}>{t(route.contentKey)}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
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
