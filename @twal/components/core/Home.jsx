import React from 'react';

import TwalLogo from './../../public/imgs/twal.svg';

import '@twal/styles/components/core/home.scss';

const Home = () => (
  <section className="made-w-twal">
    <h1>Made with</h1>
    <img src={TwalLogo} alt="twal logo" />
    <p>(and love)</p>
  </section>
);

export default Home;
