import { Urls } from 'shared/library/router';

import { NavItem, NavLink } from 'shared/ui';

export const LogoutLinks: React.FC = () => {
  return (
    <>
      <NavItem>
        <NavLink to={Urls.ROOT}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={Urls.LOGIN}>Sign In</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={Urls.REGISTRATION}>Sign Up</NavLink>
      </NavItem>
    </>
  );
};
