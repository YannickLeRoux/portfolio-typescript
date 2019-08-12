import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './store/reducers';
var promise = require('redux-promise').default;
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(reducers, applyMiddleware(promise));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
