import { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { useGate } from 'effector-react';
import { APP_NAME } from 'shared/config';
import * as user from 'shared/entities/user';
import { Header, Spinner } from 'shared/ui';
import { history } from 'router';
import { Gate } from './model';
import { Routes } from './routes';
import { LoginLinks, Logo, LogoutLinks } from './ui';

import 'shared/ui/main.css';

export const App: React.FC = () => {
  useGate(Gate);
  const isAuth = user.selectors.useIsAuth();

  return (
    <Router history={history}>
      <Header>
        <Logo title={APP_NAME} />
        <ul className="nav navbar-nav pull-xs-right">
          {isAuth ? <LoginLinks /> : <LogoutLinks />}
        </ul>
      </Header>
      <Suspense fallback={<Spinner loading />}>
        <Routes />
      </Suspense>
    </Router>
  );
};
