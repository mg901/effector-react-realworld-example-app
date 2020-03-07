import React from 'react';
import { AppGate } from './model';
import { Header } from './ui';
import { Routes } from '../router';

import 'normalize.css';
import './global.css';
import './layout.css';
import './typography.css';

export const App: React.FC = () => (
  <>
    <AppGate />
    <div className="wrap">
      <Header />
      <Routes />
    </div>
  </>
);
