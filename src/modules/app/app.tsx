import React from 'react';
import { Router } from 'react-router-dom';
import { Main } from '../../pages/main';
import { model } from '../router';

import '../router/model/init';
import './model/init';

import './index.css';

export const App: React.FC = () => (
  <Router history={model.history}>
    <Main />
  </Router>
);
