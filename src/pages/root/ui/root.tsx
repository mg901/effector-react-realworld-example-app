import React from 'react';
import { Routes, AuthBranch } from '../../../router';
import { Header } from '../../../ui';
import { Logo } from './logo';
import { Nav } from './nav';
import { LoggedOut } from './logged-out';
import { LoggedIn } from './logged-in';
import { RootGate } from '../model';
import '../init';

export const RootPage: React.FC = () => (
  <>
    <RootGate />
    <Header>
      <Logo title="conduit" />
      <Nav>
        <AuthBranch check="anon">
          <LoggedOut />
        </AuthBranch>
        <AuthBranch check="auth">
          <LoggedIn />
        </AuthBranch>
      </Nav>
    </Header>
    <Routes />
  </>
);
