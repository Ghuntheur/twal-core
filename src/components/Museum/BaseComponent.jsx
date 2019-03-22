import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

const BaseComponent = ({ match, t }) => {
  const id = match.params.id;

  return (
    <div className="text-panel">
      <h1>{t(`${id}.title`)}</h1>
    </div>
  );
};

BaseComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation('museum-content')(BaseComponent);
