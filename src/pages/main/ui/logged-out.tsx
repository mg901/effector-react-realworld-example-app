import React from 'react';
import { NavItem, NavLink } from 'ui';
import { Paths } from '../../../library/router';

export const LoggedOut: React.FC = () => (
  <>
    <NavItem>
      <NavLink to={Paths.ROOT}>Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={Paths.LOGIN}>Sign In</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={Paths.REGISTRATION}>Sign Up</NavLink>
    </NavItem>
  </>
);
