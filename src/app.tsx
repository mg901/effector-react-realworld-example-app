import React from 'react';
import { Router } from 'react-router-dom';
import { history } from './router';
import { Main } from './pages/main/ui';

export const App: React.FC = () => (
  <Router history={history}>
    <Main />
  </Router>
);
