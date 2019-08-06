import React from 'react';
import { useStore } from 'effector-react';
import { $user } from '../models/user.model';
import { EditSettingsLink } from './edit-settings-link';

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
              <EditSettingsLink user={user} />
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
