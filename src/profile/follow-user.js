import React from 'react';
import { useStore } from 'effector-react';
import cx from 'clsx';
import { Button } from '../components';
import { $profile, followReq, unfollowReq } from './model';

const classNames = (x) =>
  cx('btn-sm action-btn', {
    'btn-secondary': x,
    'btn-outline-secondary': !x,
  });

export const FollowUser = () => {
  const { username, followReqing } = useStore($profile);

  return (
    <Button
      className={classNames(followReqing)}
      onClick={() =>
        followReqing ? unfollowReq(username) : followReq(username)}>
      <i className="ion-plus-round" />
      &nbsp;
      {followReqing ? 'UnfollowReq' : 'Follow'} {username}
    </Button>
  );
};
