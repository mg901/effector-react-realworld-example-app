import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { UserProfile } from './user-profile';
import { Tabs } from './tabs';
import { getProfile, leavePage } from './model';

export const Profile = ({ match: { params } }) => {
  const isLoading = useStore(getProfile.pending);

  useEffect(() => {
    getProfile(params.username);

    return () => leavePage();
  }, [params.username]);

  return (
    <section className="container profile-page">
      <div className="profile-header">
        {isLoading ? <div>Loading ...</div> : <UserProfile />}
      </div>
      <main className="profile-main">
        <Tabs />
      </main>
    </section>
  );
};
