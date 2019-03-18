import React from 'react';

export const SubRoute1 = () => <h1>Subroute 1</h1>;
export const SubRoute2 = () => <h1>Subroute 2</h1>;
export const SubRoute3 = () => <h1>Subroute 3</h1>;

export class SubRoute4 extends React.Component {
  render() {
    return <h1>Subroute 4</h1>;
  }
}
