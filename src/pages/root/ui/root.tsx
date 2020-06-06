import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../router';
import { Container } from '../../../ui';
import { RootGate } from '../model';
import '../init';

export const RootPage: React.FC = () => (
  <>
    <RootGate />
    <header>
      <Container>
        <Link to="/">Home</Link>
        <nav>
          <Link to="/login">Sign In</Link>
          <Link to="/registration">Sign Up</Link>
        </nav>
      </Container>
    </header>
    <Routes />
  </>
);
