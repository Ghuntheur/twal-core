import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const comp1 = () => <h1>comp 1</h1>;
const comp2 = () => <h1>comp 2</h1>;
const comp3 = () => <h1>comp 3</h1>;
const comp4 = () => <h1>comp 4</h1>;
const comp5 = () => <h1>comp 5</h1>;

const BaseComponent = ({ match, t }) => {
  const id = match.params.id;

  return <h1>ceci est un test</h1>;
};

export default withTranslation('history-content')(BaseComponent);

export const COMPONENTS = [comp1, comp2, comp3, comp4, comp5];
