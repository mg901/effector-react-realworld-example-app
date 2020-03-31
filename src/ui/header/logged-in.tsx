import React from 'react';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';
import { UserBar } from '../user-bar';
import { $authorizedUser, loggedOut } from '../../modules';

export const LoggedIn: React.FC = () => {
  const { username, image } = useStore($authorizedUser);

  return (
    <>
      <NavLink to="/" className="header__nav-link">
        Home
      </NavLink>

      <NavLink to="/editor" className="header__nav-link">
        New Post
      </NavLink>

      <UserBar image={image} username={username} onLogOutClick={loggedOut} />
    </>
  );
};
