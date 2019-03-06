import React from 'react';
import withScreenSaver from '@twal/components/screenSaver/withScreenSaver';
import MainNav from '@twal/components/nav/MainNav';

const App = () => <MainNav />;

export default withScreenSaver()(App);
