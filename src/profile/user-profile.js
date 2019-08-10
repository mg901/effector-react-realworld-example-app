import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $authorizedUser } from '../auth/model';

import { FollowUser } from './follow-user';
import { $profile, $isCurrentUser } from './model';

const CurrentUserProfile = () => {
  const { image, username, bio } = useStore($authorizedUser);

  return (
    <>
      <img src={image} className="user-img" alt={username} />
      <h4>{username}</h4>
      <p>{bio}</p>
      <Link
        to="/settings"
        className="btn btn-sm btn-outline-secondary action-btn">
        <i className="ion-gear-a" /> Edit Profile Settings
      </Link>
    </>
  );
};

const AnotherUserProfile = () => {
  const { image, username, bio } = useStore($profile);

  return (
    <>
      <img src={image} className="user-img" alt={username} />
      <h4>{username}</h4>
      <p>{bio}</p>
      <FollowUser />
    </>
  );
};

export const UserProfile = () =>
  useStore($isCurrentUser) ? <CurrentUserProfile /> : <AnotherUserProfile />;
