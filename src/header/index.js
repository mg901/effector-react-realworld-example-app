import React from 'react';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { $token } from '../models/user.model';
import { $appName } from '../models/app.model';
import { LoggedIn } from './logged-in';
import { LoggedOut } from './logged-out';

export const Header = () => {
  const token = useStore($token);
  const appName = useStore($appName).toLowerCase();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {appName}
        </Link>

        {token ? <LoggedIn /> : <LoggedOut />}
      </div>
    </nav>
  );
};
