import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Routes } from '../../router';
import { Header } from './header';
import { $$isAuthenticated } from '../../auth';
import { RootGate } from '../model';
import '../model/init';

export const Root = withRouter(({ history, location }: RouteComponentProps) => {
  const isAuth = useStore($$isAuthenticated);

  useEffect(() => {
    if (isAuth && location.pathname === '/') {
      history.push('/your-feed');
    }
  }, [isAuth, history, location]);

  return (
    <>
      <RootGate />
      <div className="wrap">
        <Header />
        <Routes />
      </div>
    </>
  );
});
