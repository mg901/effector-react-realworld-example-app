import React from 'react';
import { Routes } from '../../../router';
import { Header } from './header';

export const Main: React.FC = () => (
  <div className="wrap">
    <Header />
    <Routes />
  </div>
);
