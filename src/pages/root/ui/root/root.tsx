import React from 'react';
import { Routes, AuthBranch } from '../../../../router';
import { Header, Container } from '../../../../ui';
import { Logo } from '../logo';
import { Nav } from '../nav';
import { LoggedOut } from '../logged-out';
import { LoggedIn } from '../logged-in';
import { Banner } from '../banner';
import { RootGate } from '../../model';
import '../../init';

import * as css from './index.css';

export const RootPage: React.FC = () => (
  <div className={css.app}>
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
    <Banner />
    <Container className={css.grid}>
      <main className={css.feed}>
        <Routes />
      </main>
      <aside className={css.sidebar} />
    </Container>
  </div>
);
