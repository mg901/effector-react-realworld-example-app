import React from 'react';

type Props = Readonly<{
  className?: string;
}>;

export const Nav: React.FC<Props> = ({ className, children }) => (
  <nav className={className}>{children}</nav>
);
