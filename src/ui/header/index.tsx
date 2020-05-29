import React from 'react';
import './index.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Header: React.FC<Props> = ({ children, className = '' }) => (
  <header className={`header ${className}`}>{children}</header>
);
