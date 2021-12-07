import { useGate } from 'effector-react';
import * as visitor from 'entities/visitor';
import { APP_NAME } from 'shared/constants';
import { Router, history } from 'shared/library/router';

import * as model from '../../model';
import { Routes } from '../../routes';
import { Header } from '../header';
import { LoginLinks } from '../login-links';
import { Logo } from '../logo';
import { LogoutLinks } from '../logout-links';

import '../../main.css';

export const App: React.FC = () => {
  useGate(model.Gate);
  const isAuth = visitor.selectors.useIsAuth();

  return (
    <Router history={history}>
      <Header>
        <Logo title={APP_NAME} />
        <ul className="nav navbar-nav pull-xs-right">
          {isAuth ? <LoginLinks /> : <LogoutLinks />}
        </ul>
      </Header>

      <Routes />
    </Router>
  );
};
