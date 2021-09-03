import {
  createDomain,
  restore,
  merge,
  combine,
  forward,
  attach,
  guard,
} from 'effector';
import { createGate } from 'effector-react';
import * as user from 'entities/user';
import * as api from 'shared/api';
import * as types from './types';

export const domain = createDomain('profile-page');
export const toggleFollowing = domain.createEvent<React.MouseEvent>();

export const fetchProfileFx = domain.createEffect<string, types.Profile>(
  (username) => {
    return api.get(`profiles/${username}`).then((x) => x.data.profile);
  },
);

export const subscribeFx = domain.createEffect<
  string,
  types.Profile,
  api.types.ApiError
>((username) => {
  return api.post(`profiles/${username}/follow`).then((x) => x.data.profile);
});

export const unsubscribeFx = domain.createEffect<string, types.Profile>(
  (username) => {
    return api
      .remove(`profiles/${username}/follow`)
      .then((x) => x.data.profile);
  },
);

export const Gate = createGate<types.GateState>();

export const $username = domain
  .createStore<string>('')
  .on(Gate.state, (_, { username }) => username);

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

export const $isNotCurrentUser = $isCurrentUser.map((is) => !is);

// fetch profile data after changing the route
forward({
  from: $username,
  to: fetchProfileFx,
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
