import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../router';
import { RootGate } from '../model';
import '../init';

export const RootPage: React.FC = () => (
  <>
    <RootGate />
    <header>
      <Link to="/">Home</Link>
      <nav>
        <Link to="/login">Sign In</Link>
        <Link to="/registration">Sign Up</Link>
      </nav>
    </header>
    <Routes />
  </>
);
