import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import * as visitor from '@/entities/visitor';
import { APP_NAME } from '@/shared/config';

import { Routes } from '../../routes';
import { Header } from '../header';
import { Logo } from '../logo';
import { Navigation } from '../navigation';

import './app.css';

export const App = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  useEffect(() => {
    if (isAuth) {
      visitor.getVisitorFx();
    }
  }, [isAuth]);

  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Header>
          <Logo title={APP_NAME} />
          <ul className="nav navbar-nav pull-xs-right">
            <Navigation />
          </ul>
        </Header>

        <Routes />
      </QueryParamProvider>
    </Router>
  );
};
