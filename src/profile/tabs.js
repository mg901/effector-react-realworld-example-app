import React from 'react';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';
import { $profile } from './model';

export const Tabs = () => {
  const { username } = useStore($profile);

  return (
    <div className="articles-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <NavLink exact className="nav-link" to={`/@${username}`}>
            My Articles
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink exact className="nav-link" to={`/@${username}/favorites`}>
            Favorited Articles
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
