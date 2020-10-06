import React, { Suspense } from 'react';
import { useGate } from 'effector-react';
import { APP_NAME } from '../../../config';
import { AuthBranch } from '../../../modules/router';
import { Header, Spinner } from '../../../ui';
import { Gate } from '../model';
import { LoggedIn } from './logged-in';
import { LoggedOut } from './logged-out';
import { Logo } from './logo';
import { Routes } from './routes';
import '../model/init';

export const Main: React.FC = () => {
  useGate(Gate);

  return (
    <div className="">
      <Header>
        <Logo title={APP_NAME} />
        <ul className="nav navbar-nav pull-xs-right">
          <AuthBranch check="anon">
            <LoggedOut />
          </AuthBranch>
          <AuthBranch check="auth">
            <LoggedIn />
          </AuthBranch>
        </ul>
      </Header>
      <Suspense fallback={<Spinner loading />}>
        <Routes />
      </Suspense>
    </div>
  );
};
