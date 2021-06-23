import { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { useGate } from 'effector-react';
import * as user from 'entities/user';
import { APP_NAME } from 'shared/config';
import * as router from 'shared/library/router';
import { Header, Spinner } from 'shared/ui';
import { Gate } from './model';
import { Routes } from './routes';
import { LoginLinks, Logo, LogoutLinks } from './ui';

import 'shared/ui/main.css';

export const App: React.FC = () => {
  useGate(Gate);
  const isAuth = user.selectors.useIsAuth();

  return (
    <Router history={router.history}>
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
