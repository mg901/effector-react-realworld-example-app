import { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { useGate } from 'effector-react';
import { APP_NAME } from 'shared/config';
import { Header, Spinner } from 'shared/ui';
import { AuthProvider, history, AuthCosumer } from 'router';
import { Gate } from './model';
import { Routes } from './routes';
import { LoginLinks } from './ui/login-links';

import { Logo } from './ui/logo';
import { LogoutLinks } from './ui/logout-links';

import 'shared/ui/main.css';

export const App: React.FC = () => {
  useGate(Gate);

  return (
    <Router history={history}>
      <AuthProvider>
        <Header>
          <Logo title={APP_NAME} />
          <ul className="nav navbar-nav pull-xs-right">
            <AuthCosumer>
              {({ isAuth }) => (isAuth ? <LoginLinks /> : <LogoutLinks />)}
            </AuthCosumer>
          </ul>
        </Header>
        <Suspense fallback={<Spinner loading />}>
          <Routes />
        </Suspense>
      </AuthProvider>
    </Router>
  );
};
