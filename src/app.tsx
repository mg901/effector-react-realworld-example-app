import React from 'react';
import { Router } from 'react-router-dom';
import * as router from './core/router';
import { Root } from './pages/root';

import './core/router/init';

export const App: React.FC = () => (
  <Router history={router.model.history}>
    <Root />
  </Router>
);
