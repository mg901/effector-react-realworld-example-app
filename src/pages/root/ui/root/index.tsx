import React, { Suspense } from 'react';
import { APP_NAME } from '../../../../config';
import { AuthBranch } from '../../../../router';
import { Header } from '../../../../ui';
import { Logo } from '../logo';
import { Nav } from '../nav';
import { LoggedOut } from '../logged-out';
import { LoggedIn } from '../logged-in';
import { Routes } from '../routes';
import { RootGate } from '../../model';
import '../../init';

import * as css from './index.css';

export const Root: React.FC = () => (
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
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes />
    </Suspense>
  </div>
);
