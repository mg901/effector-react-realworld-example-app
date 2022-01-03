import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/shared/router';

import { NavItem } from '@/shared/ui';

export const LogoutLinks = () => {
  return (
    <>
      <NavItem>
        <NavLink exact className="nav-link" to={ROUTES.root}>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact className="nav-link" to={ROUTES.login}>
          Sign In
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact className="nav-link" to={ROUTES.registration}>
          Sign Up
        </NavLink>
      </NavItem>
    </>
  );
};
