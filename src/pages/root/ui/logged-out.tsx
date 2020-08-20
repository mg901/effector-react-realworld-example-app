import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLink as Link } from '../../../ui';
import { Paths } from '../../../core/router';

export const LoggedOut: React.FC = () => (
  <>
    <Link as={NavLink} to={Paths.ROOT}>
      Home
    </Link>
    <Link as={NavLink} to={Paths.LOGIN}>
      Sign In
    </Link>
    <Link as={NavLink} to={Paths.REGISTRATION}>
      Sign Up
    </Link>
  </>
);
