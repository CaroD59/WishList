import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
