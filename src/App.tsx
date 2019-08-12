import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainNavigation from './components/MainNavigation';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <MainNavigation />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
