import React from 'react';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';
import { $token } from '../auth/model';

export const UserFeedLink = ({ url }) => {
  const token = useStore($token);

  return (
    token && (
      <NavLink to={`${url}/user`} className="nav-link">
        your feed
      </NavLink>
    )
  );
};
