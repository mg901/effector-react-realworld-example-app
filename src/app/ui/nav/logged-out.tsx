import React from 'react';
import { NavLink } from 'react-router-dom';

export const LoggedOut: React.FC = () => (
  <>
    <NavLink to="/feed" className="nav-link">
      Home
    </NavLink>

    <NavLink to="/login" className="nav-link">
      Sign in
    </NavLink>

    <NavLink to="/register" className="nav-link">
      Sign up
    </NavLink>
  </>
);
