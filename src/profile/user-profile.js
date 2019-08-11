import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $authorizedUser } from '../auth/model';

import { FollowUser } from './follow-user';
import { $profile, $isCurrentUser } from './model';
import './index.css';

const CurrentUser = () => {
  const { image, username, bio } = useStore($authorizedUser);

  return (
    <>
      <aside className="profile-sidebar">
        <img src={image} className="user-image" alt={username} />
      </aside>
      <main className="profile-main">
        <h1 className="profile-title">{username}</h1>
        <p className="profile-bio">{bio}</p>
        <Link to="/settings" className="btn btn-default">
          Edit Profile
        </Link>
      </main>
    </>
  );
};

const Profile = () => {
  const { image, username, bio } = useStore($profile);

  return (
    <>
      <img src={image} className="user-image" alt={username} />
      <h4>{username}</h4>
      <p>{bio}</p>
      <FollowUser />
    </>
  );
};

export const UserProfile = () =>
  useStore($isCurrentUser) ? <CurrentUser /> : <Profile />;
