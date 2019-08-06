import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { UserProfile } from './user-profile';
import { Tabs } from './tabs';
import { asyncGetProfile, leavePage } from './model';

export const Profile = ({ match: { params } }) => {
  const isLoading = useStore(asyncGetProfile.pending);

  useEffect(() => {
    asyncGetProfile(params.username);

    return () => {
      leavePage();
    };
  }, [params.username]);

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              {isLoading ? <div>Loading ...</div> : <UserProfile />}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
};
