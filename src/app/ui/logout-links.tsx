import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/shared/router';

import { NavItem } from '@/shared/ui';

export const LogoutLinks = () => {
  return (
    <>
      <NavItem>
        <NavLink exact className="nav-link" to={ROUTES.ROOT}>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact className="nav-link" to={ROUTES.LOGIN}>
          Sign In
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact className="nav-link" to={ROUTES.REGISTRATION}>
          Sign Up
        </NavLink>
      </NavItem>
    </>
  );
};
