import React from 'react';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { $token } from '../../modules/auth';
import { LoggedIn } from './logged-in';
import { LoggedOut } from './logged-out';
import { APP_NAME } from '../../constants';
import './index.css';

export const Header: React.FC = () => {
  const token = useStore($token);

  return (
    <header className="header">
      <div className="container header__inner">
        {token && (
          <Link to="/" className="link logo header__logo">
            {APP_NAME.toLowerCase()}
          </Link>
        )}

        <nav className="header__nav">
          {token ? <LoggedIn /> : <LoggedOut />}
        </nav>
      </div>
    </header>
  );
};
