import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomeButton from './HomeButton';
import Rooms from '@root/src/components/Rooms';
import History from '@root/src/components/History';

const MainNav = () => (
  <>
    <HomeButton />
    <Route exact path="/" component={() => <Link to="rooms">rooms</Link>} />
    <Route path="/rooms" component={Rooms} />
    <Route path="/history" component={History} />
  </>
);

export default MainNav;
