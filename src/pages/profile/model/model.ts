import {
  createEvent,
  createEffect,
  createStore,
  restore,
  merge,
  combine,
  split,
  forward,
  attach,
} from 'effector';
import { createGate } from 'effector-react';
import * as user from 'entities/user';
import * as api from 'shared/api';
import * as types from './types';

export const toggleFollowing = createEvent<React.MouseEvent>();

export const getProfileFx = createEffect<string, types.Profile>((username) => {
  return api.get(`profiles/${username}`).then((x) => x.data.profile);
});

export const subscribeFx = createEffect<
  string,
  types.Profile,
  api.types.ApiError
>((username) => {
  return api.post(`profiles/${username}/follow`).then((x) => x.data.profile);
});

export const unsubscribeFx = createEffect<string, types.Profile>((username) => {
  return api.del(`profiles/${username}/follow`).then((x) => x.data.profile);
});

export const Gate = createGate<types.GateState>();

export const $username = createStore<string>('').on(
  Gate.state,
  (_, { username }) => username,
);

export const $profile = restore(
  merge([getProfileFx.doneData, subscribeFx.doneData, unsubscribeFx.doneData]),
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

export const $isNotCurrentUser = $isCurrentUser.map((is) => !is);

// fetch profile data after changing the route
forward({
  from: $username,
  to: getProfileFx,
});

split({
  source: toggleFollowing,
  match: {
    subscribe: $profile.map((x) => x.following === false),
    unsubscribe: $profile.map((x) => x.following === true),
  },
  cases: {
    subscribe: attach({
      source: $username,
      effect: unsubscribeFx,
    }),
    unsubscribe: attach({
      source: $username,
      effect: unsubscribeFx,
    }),
  },
});
