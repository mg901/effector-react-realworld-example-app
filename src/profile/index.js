import React from 'react';
import { useStore } from 'effector-react';
import { $user } from '../models/user.model';
import { EditSettings } from './edit-settings';

export const Profile = () => {
  const user = useStore($user);

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={user.image} className="user-img" alt={user.username} />
              <h4>{user.username}</h4>
              <p>{user.bio}</p>
              <EditSettings user={user} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle" />
          </div>
        </div>
      </div>
    </div>
  );
};
