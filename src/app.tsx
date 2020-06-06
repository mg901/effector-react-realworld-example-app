import React from 'react';
import { Router } from 'react-router-dom';
import { history, Routes } from './router';

export const App: React.FC = () => (
  <Router history={history}>
    <Routes />
  </Router>
);
