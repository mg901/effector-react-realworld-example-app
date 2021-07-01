import { NavLink as Link, NavLinkProps } from 'react-router-dom';

export const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => (
  <Link {...props} exact className="nav-link">
    {children}
  </Link>
);
