import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

const BaseComponent = ({ match, t }) => {
  const id = match.params.id;

  return (
    <div className="text-panel">
      <h1>{t(`${id}.title`)}</h1>
      <p>
        Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas, quibus, si
        nupsissent, per aetatem ter iam nixus poterat suppetere liberorum, ad usque taedium pedibus
        pavimenta tergentes iactari volucriter gyris, dum exprimunt innumera simulacra, quae finxere
        fabulae theatrales. Itaque verae amicitiae difficillime reperiuntur in iis qui in honoribus
        reque publica versantur; ubi enim istum invenias qui honorem amici anteponat suo? Quid? Haec
        ut omittam, quam graves, quam difficiles plerisque videntur calamitatum societates! Ad quas
        non est facile inventu qui descendant. Quamquam Ennius recte. Tempore quo primis auspiciis
        in mundanum fulgorem surgeret victura dum erunt homines Roma, ut augeretur sublimibus
        incrementis, foedere pacis aeternae Virtus convenit atque Fortuna plerumque dissidentes,
        quarum si altera defuisset, ad perfectam non venerat summitatem.
      </p>
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
