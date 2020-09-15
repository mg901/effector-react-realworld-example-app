import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from 'effector-react';
import { authModel } from '../../../auth';
import { Paths } from '../../../library/router';
import { NavLink as Link } from '../../../ui';
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
