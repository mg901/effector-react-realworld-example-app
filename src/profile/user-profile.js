import React from 'react';
import { useStore } from 'effector-react';
import { $user } from '../models/user.model';
import { EditSettings } from './edit-settings';
import { FollowUser } from './follow-user';
import { $profile, $isCurrentUser } from './model';

const CurrentUserProfile = () => {
  const { image, username, bio } = useStore($user);

  return (
    <>
      <img src={image} className="user-img" alt={username} />
      <h4>{username}</h4>
      <p>{bio}</p>
      <EditSettings />
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
