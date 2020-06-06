import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../router';
import { Header } from './header';
import { Logo } from './logo';
import { Nav } from './nav';
import { NavLink } from '../../../ui';
import { RootGate } from '../model';
import '../init';

export const RootPage: React.FC = () => (
  <>
    <RootGate />
    <Header>
      <Logo title="conduit" />
      <Nav>
        <NavLink as={Link} to="/login">
          Sign In
        </NavLink>
        <NavLink as={Link} to="/registration">
          Sign Up
        </NavLink>
      </Nav>
    </Header>
    <Routes />
  </>
);
