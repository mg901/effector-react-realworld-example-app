import { combine, forward, attach, guard } from 'effector';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from '../../../api';
import * as router from '../../../library/router';
import * as user from '../../../modules/user';
import { root } from '../../../root';
import * as types from './types';

export const toggleFollowing = root.createEvent<React.MouseEvent>();

export const fetchProfileFx = root.createEffect((username: string) =>
  request
    .get<types.GetProfileFxDone>(`profiles/${username}`)
    .then((x) => x.data.profile),
);

export const subscribeFx = root.createEffect<string, types.Profile, AxiosError>(
  {
    handler: (username: string) =>
      request.post(`profiles/${username}/follow`).then((x) => x.data.profile),
  },
);

export const unsubscribeFx = root.createEffect((username: string) =>
  request
    .delete<types.GetProfileFxDone>(`profiles/${username}/follow`)
    .then((x) => x.data.profile),
);

export const Gate = createGate<types.GateState>();

export const $username = root
  .createStore<string>('')
  .on(Gate.state, (_, { url }) => url?.replace(/\/@/, ''));

export const $profile = root
  .createStore<types.Profile>({
    bio: '',
    following: false,
    image: '',
    username: '',
  })
  .on(
    [fetchProfileFx.doneData, subscribeFx.doneData, unsubscribeFx.doneData],
    (_, payload) => payload,
  );

export const $following = $profile.map((x) => x.following);
export const $thenSubscribed = $profile.map((x) => x.following === true);
export const $thenUnsubscribed = $profile.map((x) => x.following === false);

export const $isCurrentUser = combine(
  $profile,
  user.model.$user,
  (profile, authUser) => profile.username === authUser.username,
);

export const $isAnotherUser = $isCurrentUser.map((x) => !x);

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
