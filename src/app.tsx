import React from 'react';
import { Router, Link } from 'react-router-dom';
import { history, Routes } from './router';

export const App: React.FC = () => (
  <Router history={history}>
    <header>
      <Link to="/">Home</Link>

      <nav>
        <Link to="/login">Sign In</Link>
        <Link to="/registration">Sign Up</Link>
      </nav>
    </header>
    <div>
      <Routes />
    </div>
  </Router>
);
