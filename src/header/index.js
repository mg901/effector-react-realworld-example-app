import React from 'react';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { $appName } from '../models/app.model';
import { Nav } from './nav';

export const Header = () => {
  const appName = useStore($appName).toLowerCase();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {appName}
        </Link>

        <Nav />
      </div>
    </nav>
  );
};
