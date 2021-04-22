import { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { useGate } from 'effector-react';
import { AuthProvider, history, AuthCosumer } from 'router';
import { Header, Spinner } from 'ui';
import { APP_NAME } from 'config';
import { Gate } from './model';
import { Routes } from './routes';
import { LoginLinks } from './ui/login-links';

import { Logo } from './ui/logo';
import { LogoutLinks } from './ui/logout-links';

import 'ui/main.css';

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
