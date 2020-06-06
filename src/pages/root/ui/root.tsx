import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Routes } from '../../../router';
import { Header } from './header';
import { Logo } from './logo';
import { Nav } from './nav';
import { Link } from '../../../ui';
import { RootGate } from '../model';
import '../init';

export const RootPage: React.FC = () => (
  <>
    <RootGate />
    <Header>
      <Logo title="conduit" />
      <Nav>
        <Link as={RouterLink} to="/login">
          Sign In
        </Link>
        <Link as={RouterLink} to="/registration">
          Sign Up
        </Link>
      </Nav>
    </Header>
    <Routes />
  </>
);
