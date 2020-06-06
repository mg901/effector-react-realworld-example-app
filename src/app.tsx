import React from 'react';
import { Router } from 'react-router-dom';
import { history } from './router';
import { RootPage } from './pages';

import './ui/init/global.css';
import './ui/init/layout.css';

export const App: React.FC = () => (
  <Router history={history}>
    <RootPage />
  </Router>
);
