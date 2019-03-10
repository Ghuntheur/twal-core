import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';

import '@twal/styles/components/languages/language.scss';

import twalConfig from '@root/twal.config';

const Language = ({ code, active, t, ...rest }) => {
  const {
    i18n: { useCountriesFlag }
  } = twalConfig;

  const props = Object.assign({}, rest);
  delete props.tReady;

  return (
    <button className={classnames('btn', 'btn-language', { active })} {...props}>
      {(useCountriesFlag || useCountriesFlag === undefined) && (
        <div className="flag-wrapper">
          <img src={`/flags/${code}.svg`} alt={`${code} flag`} />
        </div>
      )}
      <div className="language-code">{t(code)}</div>
    </button>
  );
};

Language.propTypes = {
  tReady: PropTypes.bool,
  t: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default withTranslation('languages')(Language);
