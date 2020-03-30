import React from 'react';
import { AppGate } from './model';
import { Header } from './ui';
import { Routes } from '../router';

import 'normalize.css';
import '../../ui/styles/global.css';
import '../../ui/styles/layout.css';
import '../../ui/styles/typography.css';

export const App: React.FC = () => (
  <>
    <AppGate />
    <div className="wrap">
      <Header />
      <Routes />
    </div>
  </>
);
