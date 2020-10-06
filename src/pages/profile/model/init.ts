import { forward, attach, guard } from 'effector';
import {
  $profile,
  $username,
  Gate,
  fetchProfileFx,
  toggleFollowing,
  $thenSubscribed,
  $thenUnsubscribed,
  subscribeFx,
  unsubscribeFx,
} from '.';
import * as router from '../../../modules/router';

$profile.on(
  [fetchProfileFx.doneData, subscribeFx.doneData, unsubscribeFx.doneData],
  (_, payload) => payload,
);
$username.on(Gate.state, (_, { url }) => url?.replace(/\/@/, ''));

// fetch profile data after changing the route
forward({
  from: $username,
  to: attach({
    source: $username,
    effect: fetchProfileFx,
  }),
});

guard({
  source: toggleFollowing,
  filter: $thenSubscribed,
  target: attach({
    source: $username,
    effect: unsubscribeFx,
  }),
});

guard({
  source: toggleFollowing,
  filter: $thenUnsubscribed,
  target: attach({
    source: $username,
    effect: subscribeFx,
  }),
});

subscribeFx.failData.watch((error) => {
  if (error.response?.status === 401) {
    router.model.history.push(router.Paths.LOGIN);
  }
});
