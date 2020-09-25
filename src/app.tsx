import React from 'react';
import { Router } from 'react-router-dom';
import { model } from './library/router';
import { Main } from './pages/main';

import './library/router/model/init';
import './features/user/init';

export const App: React.FC = () => (
  <Router history={model.history}>
    <Main />
  </Router>
);
