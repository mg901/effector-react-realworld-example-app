import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const Nav: React.FC<Props> = ({ children, className }) => (
  <nav className={className}>{children}</nav>
);
