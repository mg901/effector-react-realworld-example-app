import React from 'react';
import { Router } from 'react-router-dom';
import { model } from './library/router';
import { Main } from './pages/main';

import './library/router/model/init';
import './modules/user/model/init';

import './main.css';

export const App: React.FC = () => (
  <Router history={model.history}>
    <Main />
  </Router>
);
