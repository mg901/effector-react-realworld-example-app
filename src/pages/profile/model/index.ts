import {
  createEvent,
  createEffect,
  createStore,
  restore,
  merge,
  combine,
  forward,
  attach,
  guard,
} from 'effector-root';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { api } from 'api';
import * as user from 'shared-modules/user';
import * as types from './types';

export const toggleFollowing = createEvent<React.MouseEvent>();

export const fetchProfileFx = createEffect<string, types.Profile>((username) =>
  api.get(`profiles/${username}`).then(({ data }) => data.profile),
);

export const subscribeFx = createEffect<string, types.Profile, AxiosError>(
  (username) =>
    api.post(`profiles/${username}/follow`).then(({ data }) => data.profile),
);

export const unsubscribeFx = createEffect<string, types.Profile>((username) =>
  api.delete(`profiles/${username}/follow`).then(({ data }) => data.profile),
);

export const Gate = createGate<types.GateState>();

export const $username = createStore<string>('').on(Gate.state, (_, { url }) =>
  url?.replace(/\/@/, ''),
);

export const $profile = restore(
  merge([
    fetchProfileFx.doneData,
    subscribeFx.doneData,
    unsubscribeFx.doneData,
  ]),
  {
    bio: '',
    following: false,
    image: '',
    username: '',
  },
);

export const $following = $profile.map((x) => x.following);
export const $isCurrentUser = combine(
  $profile,
  user.model.$user,
  (profile, authUser) => profile.username === authUser.username,
);

export const $isAnotherUser = $isCurrentUser.map((is) => !is);

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
  filter: $profile.map((x) => x.following === true),
  target: attach({
    source: $username,
    effect: unsubscribeFx,
  }),
});

guard({
  source: toggleFollowing,
  filter: $profile.map((x) => x.following === false),
  target: attach({
    source: $username,
    effect: subscribeFx,
  }),
});
