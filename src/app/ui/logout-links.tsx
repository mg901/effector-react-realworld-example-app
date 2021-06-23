import * as router from 'shared/library/router';
import { NavItem, NavLink } from 'shared/ui';

export const LogoutLinks: React.FC = () => {
  return (
    <>
      <NavItem>
        <NavLink to={router.URLS.ROOT}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={router.URLS.LOGIN}>Sign In</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={router.URLS.REGISTRATION}>Sign Up</NavLink>
      </NavItem>
    </>
  );
};
