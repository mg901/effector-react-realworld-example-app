import React from 'react';
import { Router } from 'react-router-dom';
import { model } from './core/router';
import { Root } from './pages/root';
import './core/router/init';

export const App: React.FC = () => (
  <Router history={model.history}>
    <Root />
  </Router>
);
