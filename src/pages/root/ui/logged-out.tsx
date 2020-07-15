import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLink as Link } from '../../../ui';
import { Links } from '../../../router';

export const LoggedOut: React.FC = () => (
  <>
    <Link as={NavLink} to={Links.LOGIN}>
      Sign In
    </Link>
    <Link as={NavLink} to={Links.REGISTRATION}>
      Sign Up
    </Link>
  </>
);
