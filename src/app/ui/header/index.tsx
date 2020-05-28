import React from 'react';
import { APP_NAME } from '../../../constants';
import { Logo } from '../../../ui';
import { Nav } from '../nav';
import './index.css';

export const Header: React.FC = () => (
  <header className="header">
    <div className="container header__inner">
      <Logo title={APP_NAME} />
      <Nav />
    </div>
  </header>
);
