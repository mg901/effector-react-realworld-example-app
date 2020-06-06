import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../router';
import { Header } from '../../../ui';
import { RootGate } from '../model';
import '../init';

export const RootPage: React.FC = () => (
  <>
    <RootGate />
    <Header>
      <Link to="/">Home</Link>
      <nav>
        <Link to="/login">Sign In</Link>
        <Link to="/registration">Sign Up</Link>
      </nav>
    </Header>
    <Routes />
  </>
);
