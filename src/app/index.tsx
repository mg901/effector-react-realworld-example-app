import React from 'react';
import { Router } from 'react-router-dom';
import { useGate } from 'effector-react';
import { APP_NAME } from 'config';
import { AuthBranch, model } from 'library/router';
import { Header, Spinner } from 'ui';
import { Gate } from './model';
import { LoggedIn } from './ui/logged-in';
import { LoggedOut } from './ui/logged-out';
import { Logo } from './ui/logo';
import { Routes } from './ui/routes';
import './index.css';

export const App: React.FC = () => {
  useGate(Gate);

  return (
    <Router history={model.history}>
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
      <React.Suspense fallback={<Spinner loading />}>
        <Routes />
      </React.Suspense>
    </Router>
  );
};
