import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const Header: React.FC<Props> = ({ className = '', children }) => (
  <header className={`navbar navbar-light ${className}`}>
    <div className="container">{children}</div>
  </header>
);
