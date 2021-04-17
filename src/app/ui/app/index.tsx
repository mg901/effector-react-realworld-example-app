import { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { useGate } from 'effector-react';
import { model } from 'router';
import { Header, Spinner } from 'ui';
import { APP_NAME } from 'config';
import { Gate } from '../../model';
import { Routes } from '../../routes';
import { LoggedIn } from '../logged-in';
import { LoggedOut } from '../logged-out';
import { Logo } from '../logo';

import './index.css';

export const App: React.FC = () => {
  useGate(Gate);

  return (
    <Router history={model.history}>
      <Header>
        <Logo title={APP_NAME} />
        <ul className="nav navbar-nav pull-xs-right">
          <LoggedOut />
          <LoggedIn />
        </ul>
      </Header>
      <Suspense fallback={<Spinner loading />}>
        <Routes />
      </Suspense>
    </Router>
  );
};
