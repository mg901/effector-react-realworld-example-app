import React, { useEffect } from 'react';
import { Header } from '../header';
import { Main } from '../main';
import { TOKEN_FROM_STORAGE } from '../constants';
import { getUser } from '../auth/model.events';
import { initAuthApp, intitNotAuthApp } from './model';

export const App = () => {
  useEffect(() => {
    if (TOKEN_FROM_STORAGE) {
      getUser();
      initAuthApp();
    } else {
      intitNotAuthApp();
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};
