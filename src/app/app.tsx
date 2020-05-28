import React from 'react';
import { Router } from 'react-router-dom';
import { history, Routes } from '../router';
import { Header } from './ui';

export const App: React.FC = () => (
  <Router history={history}>
    <div className="wrap">
      <Header />
      <Routes />
    </div>
  </Router>
);
