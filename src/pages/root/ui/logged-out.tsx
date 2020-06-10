import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLink as Link } from '../../../ui';
import { LINKS } from '../../../router';

export const LoggedOut: React.FC = () => (
  <>
    <Link as={NavLink} to={LINKS.LOGIN}>
      Sign In
    </Link>
    <Link as={NavLink} to={LINKS.REGISTRATION}>
      Sign Up
    </Link>
  </>
);
