import React from 'react';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';
import { UserBar } from '../../../../ui';
import { $authorizedUser, loggedOut } from '../../../auth';

export const LoggedIn: React.FC = () => {
  const { username, image } = useStore($authorizedUser);

  return (
    <>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>

      <NavLink to="/editor" className="nav-link">
        New Post
      </NavLink>

      <UserBar image={image} username={username} onLogOutClick={loggedOut} />
    </>
  );
};
