import React, { useEffect } from 'react';
import { Header } from './header';
import { Main } from './main';
import { getToken } from './auth/model.events';

export const App = () => {
  useEffect(() => {
    getToken();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};
