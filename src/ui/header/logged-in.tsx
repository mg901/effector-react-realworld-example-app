import React from 'react';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';
import { UserBar } from '../user-bar';
import { $authUser } from '../../modules/auth';

export const LoggedIn: React.FC = () => {
  const { username, image } = useStore($authUser);

  return (
    <>
      <NavLink to="/" className="header__nav-link">
        Home
      </NavLink>

      <NavLink to="/editor" className="header__nav-link">
        New Post
      </NavLink>

      <UserBar
        image={image}
        username={username}
        onLogOutClick={(): void => {}}
      />
    </>
  );
};
