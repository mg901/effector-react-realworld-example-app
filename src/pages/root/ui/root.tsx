import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../router';
import { Header } from './header';
import { Logo } from './logo';
import { Nav } from './nav';
import { RootGate } from '../model';
import '../init';

export const RootPage: React.FC = () => (
  <>
    <RootGate />
    <Header>
      <Logo title="conduit" />
      <Nav>
        <Link to="/login">Sign In</Link>
        <Link to="/registration">Sign Up</Link>
      </Nav>
    </Header>
    <Routes />
  </>
);
