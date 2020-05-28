import React from 'react';
import { useStore } from 'effector-react';
import { $isAuthorized } from '../../../../auth';
import { LoggedIn } from './logged-in';
import { LoggedOut } from './logged-out';
import './index.css';

export const Nav: React.FC = () => {
  const isAuth = useStore($isAuthorized);

  return <nav className="nav">{isAuth ? <LoggedIn /> : <LoggedOut />}</nav>;
};
