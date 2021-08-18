import { URLS } from 'shared/library/router';

import { NavItem, NavLink } from 'shared/ui';

export const LogoutLinks: React.FC = () => {
  return (
    <>
      <NavItem>
        <NavLink to={URLS.ROOT}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={URLS.LOGIN}>Sign In</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={URLS.REGISTRATION}>Sign Up</NavLink>
      </NavItem>
    </>
  );
};
