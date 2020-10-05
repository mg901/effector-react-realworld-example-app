import { forward, attach, guard } from 'effector';
import * as router from '../../../library/router';
import {
  $profile,
  $username,
  PageGate,
  fetchProfileFx,
  toggleFollowing,
  $thenSubscribed,
  $thenUnsubscribed,
  subscribeFx,
  unsubscribeFx,
} from './model';

$profile.on(
  [fetchProfileFx.doneData, subscribeFx.doneData, unsubscribeFx.doneData],
  (_, payload) => payload,
);
$username.on(PageGate.state, (_, { url }) => url?.replace(/\/@/, ''));

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
