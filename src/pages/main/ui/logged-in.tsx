import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from 'effector-react';
import * as auth from 'features/user';
import { Paths } from 'library/router';

export const LoggedIn: React.FC = () => {
  const { username, image } = useStore(auth.model.$authorizedUser);

  return (
    <>
      <li className="nav-item">
        <NavLink exact to={Paths.ROOT} className="nav-link">
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink exact to={Paths.EDITOR} className="nav-link">
          <i className="ion-compose" />
          &nbsp;New Post
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink exact to={Paths.SETTINGS} className="nav-link">
          <i className="ion-gear-a" />
          &nbsp;Settings
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink exact to={`/@${username}`} className="nav-link">
          <img src={image} className="user-pic" alt={username} />
          {username}
        </NavLink>
      </li>
    </>
  );
};
