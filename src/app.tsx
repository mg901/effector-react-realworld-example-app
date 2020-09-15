import React from 'react';
import { Router } from 'react-router-dom';
import { model } from './library/router';
import { Root } from './pages/main';
import './library/router/init';

export const App: React.FC = () => (
  <Router history={model.history}>
    <Root />
  </Router>
);
