import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import React from 'react';
import { history } from './router';
import { App } from './app';
import 'normalize.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/typography.css';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'),
);
