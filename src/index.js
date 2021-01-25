import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider, connect} from 'react-redux' 
import { store }from './reducers/index'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
