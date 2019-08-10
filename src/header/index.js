import React from 'react';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { $token } from '../auth/model';
import { LoggedIn } from './logged-in';
import { LoggedOut } from './logged-out';

export const Header = () => {
  const token = useStore($token);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Conduit
        </Link>

        {token ? <LoggedIn /> : <LoggedOut />}
      </div>
    </nav>
  );
};
