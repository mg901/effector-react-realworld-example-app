import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../../../constants';
import { Nav } from '../nav';
import './index.css';

export const Header: React.FC = () => (
  <header className="header">
    <div className="container header__inner">
      <Link to="/" className="link logo header__logo">
        {APP_NAME.toLowerCase()}
      </Link>
      <Nav />
    </div>
  </header>
);
