import React from 'react';
import { AppGate } from './model';
import { Header } from './ui';
import { Routes } from '../router';

import 'normalize.css';
import '../../ui/global.css';
import '../../ui/layout.css';
import '../../ui/typography.css';

export const App: React.FC = () => (
  <>
    <AppGate />
    <div className="wrap">
      <Header />
      <Routes />
    </div>
  </>
);
