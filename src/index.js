import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// Throwing a bone to IE11 here. Everyone else supports it.
require('es6-object-assign').polyfill();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
