import React from 'react';
import Routes from './routes';

import './global.css';

import Header from './components/Header';

export default () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);