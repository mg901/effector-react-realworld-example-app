import React from 'react';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';
import { authModel } from '../../../core/auth';
import { NavLink as Link } from '../../../ui';
import { Paths } from '../../../core/router';
import { UserBar } from './user-bar';

export const LoggedIn: React.FC = () => {
  const { username, image } = useStore(authModel.$authorizedUser);

  return (
    <>
      <Link as={NavLink} to={Paths.ROOT}>
        Home
      </Link>

      <Link as={NavLink} to={Paths.EDITOR}>
        New Post
      </Link>

      <UserBar
        image={image}
        username={username}
        onLogOutClick={() => authModel.loggedOutClicked()}
      />
    </>
  );
};
