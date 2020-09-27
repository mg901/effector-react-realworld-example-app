import { forward, attach, guard } from 'effector';

import {
  $profile,
  $username,
  PageGate,
  getProfileFx,
  toggleFollowing,
  $follow,
  $unfollow,
  followUserFx,
  unfollowUserFx,
} from './model';

$profile.on(
  [getProfileFx.doneData, followUserFx.doneData, unfollowUserFx.doneData],
  (_, payload) => payload,
);
$username.on(PageGate.state, (_, { url }) => url?.replace(/\/@/, ''));

forward({
  from: $username,
  to: attach({
    source: $username,
    effect: getProfileFx,
  }),
});

forward({
  from: guard(toggleFollowing, { filter: $follow }),
  to: attach({
    source: $username,
    effect: unfollowUserFx,
  }),
});

forward({
  from: guard(toggleFollowing, { filter: $unfollow }),
  to: attach({
    source: $username,
    effect: followUserFx,
  }),
});
