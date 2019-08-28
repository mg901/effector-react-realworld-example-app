import React from 'react';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';
import { UserBar } from './user-bar';
import { $authUser } from '../auth/model';

export const LoggedIn = () => {
  const { username, image } = useStore($authUser);

  return (
    <>
      <NavLink to="/" className="header-nav-link">
        Home
      </NavLink>

      <NavLink to="/editor" className="header-nav-link">
        New Post
      </NavLink>

      <UserBar image={image} username={username} />
    </>
  );
};
