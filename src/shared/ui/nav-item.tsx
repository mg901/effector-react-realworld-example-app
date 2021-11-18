import { memo } from 'react';

export const NavItem: React.FC = memo(({ children }) => {
  return <li className="nav-item">{children}</li>;
});
