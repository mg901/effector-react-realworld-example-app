import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLink as Link } from '../../../../ui';

export const LoggedOut: React.FC = () => (
  <>
    <Link as={NavLink} to="/login">
      Sign In
    </Link>
    <Link as={NavLink} to="/registration">
      Sign Up
    </Link>
  </>
);
