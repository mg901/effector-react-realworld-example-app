import React from 'react';
import './index.css';

type Props = {
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children }) => (
  <header className="header">
    <div className="container header__inner">{children}</div>
  </header>
);
