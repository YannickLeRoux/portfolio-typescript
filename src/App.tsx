import * as React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
var promise = require('redux-promise').default;

import { BrowserRouter } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainNavigation from './components/MainNavigation';

const store:any = createStore(reducers, applyMiddleware(promise));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
              <MainNavigation />
            <Footer />
          </div>

        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
