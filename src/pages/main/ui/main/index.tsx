import React, { Suspense } from 'react';
import { useGate } from 'effector-react';
import { APP_NAME } from '../../../../config';
import { AuthBranch } from '../../../../library/router';
import { Header } from '../../../../ui';
import * as model from '../../model';
import { LoggedIn } from '../logged-in';
import { LoggedOut } from '../logged-out';
import { Logo } from '../logo';
import { Nav } from '../nav';
import { Routes } from '../routes';

import '../../init';

import * as css from './index.css';

export const Main: React.FC = () => {
  useGate(model.RootGate);

  return (
    <div className={css.app}>
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
};
