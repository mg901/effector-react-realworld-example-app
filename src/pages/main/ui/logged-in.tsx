import React from 'react';
import { useStore } from 'effector-react';
import { model } from 'features/user';
import { Paths } from 'library/router';
import { NavItem, NavLink } from 'ui';

export const LoggedIn: React.FC = () => {
  const { username, image } = useStore(model.$user);

  return (
    <>
      <NavItem>
        <NavLink to={Paths.ROOT}>Home</NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={Paths.EDITOR}>
          <i className="ion-compose" />
          &nbsp;New Post
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={Paths.SETTINGS}>
          <i className="ion-gear-a" />
          &nbsp;Settings
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={`/@${username}`}>
          <img src={image} className="user-pic" alt={username} />
          {username}
        </NavLink>
      </NavItem>
    </>
  );
};
