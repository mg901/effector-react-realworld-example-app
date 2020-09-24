import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paths } from 'library/router';

export const LoggedOut: React.FC = () => (
  <>
    <li className="nav-item">
      <NavLink exact to={Paths.ROOT} className="nav-link">
        Home
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact to={Paths.LOGIN} className="nav-link">
        Sign In
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact to={Paths.REGISTRATION} className="nav-link">
        Sign Up
      </NavLink>
    </li>
  </>
);
