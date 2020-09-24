import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paths } from 'library/router';
import { NavLink as Link } from 'ui';

export const LoggedOut: React.FC = () => (
  <>
    <li className="nav-item">
      <Link as={NavLink} to={Paths.ROOT} className="nav-link">
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link as={NavLink} to={Paths.LOGIN} className="nav-link">
        Sign In
      </Link>
    </li>
    <li className="nav-item">
      <Link as={NavLink} to={Paths.REGISTRATION} className="nav-link">
        Sign Up
      </Link>
    </li>
  </>
);
