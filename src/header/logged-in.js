import React from 'react';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { $currentUser } from '../models/user.model';

export const LoggedIn = () => {
  const { username, image } = useStore($currentUser);

  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/editor" className="nav-link">
          <i className="ion-compose" />
          &nbsp;New Post
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/settings" className="nav-link">
          <i className="ion-gear-a" />
          &nbsp;Settings
        </Link>
      </li>

      <li className="nav-item">
        <Link to={`/@${username}`} className="nav-link">
          <img src={image} className="user-pic" alt={username} />
          {username}
        </Link>
      </li>
    </ul>
  );
};
