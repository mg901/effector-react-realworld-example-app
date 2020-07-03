import React from 'react';
import { APP_NAME } from '../../../../config';
import { Routes, AuthBranch } from '../../../../router';
import { Header, Container } from '../../../../ui';
import { Logo } from '../logo';
import { Nav } from '../nav';
import { LoggedOut } from '../logged-out';
import { LoggedIn } from '../logged-in';
import { Banner } from '../banner';
import { Tabs } from '../tabs';
import { TagList } from '../tag-list';
import { RootGate } from '../../model';
import '../../init';

import * as css from './index.css';

export const RootPage: React.FC = () => (
  <div className={css.app}>
    <RootGate />
    <Header>
      <Logo title={APP_NAME} />
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
        <Tabs />
        <Routes />
      </main>
      <aside className={css.sidebar}>
        <TagList />
      </aside>
    </Container>
  </div>
);
