import React from 'react';
import { useStore } from 'effector-react';
import { $token } from '../../../auth';
import { LoggedIn } from './logged-in';
import { LoggedOut } from './logged-out';
import './index.css';

export const Nav: React.FC = () => {
  const token = useStore($token);

  return <nav className="nav">{token ? <LoggedIn /> : <LoggedOut />}</nav>;
};
