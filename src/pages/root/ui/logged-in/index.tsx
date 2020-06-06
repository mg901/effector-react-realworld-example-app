import React from 'react';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';
import { $authorizedUser, loggedOutClicked } from '../../../../auth';
import { NavLink as Link } from '../../../../ui';
import { UserBar } from '../user-bar';

export const LoggedIn: React.FC = () => {
  const { username, image } = useStore($authorizedUser);

  return (
    <>
      <Link as={NavLink} to="/">
        Home
      </Link>

      <Link as={NavLink} to="/editor">
        New Post
      </Link>

      <UserBar
        image={image}
        username={username}
        onLogOutClick={() => loggedOutClicked()}
      />
    </>
  );
};
