import { createEffect, restore, merge, combine, guard } from 'effector';
import { createGate } from 'effector-react';
import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import * as types from './types';

export const getProfileFx = createEffect((username: string) => {
  return api
    .get<{ profile: types.Profile }>(`profiles/${username}`)
    .then((x) => x.data.profile);
});

export const subscribeFx = createEffect<
  string,
  types.Profile,
  api.types.ApiError
>((username) => {
  return api
    .post<{ profile: types.Profile }>(`profiles/${username}/follow`)
    .then((x) => x.data.profile);
});

export const unsubscribeFx = createEffect((username: string) => {
  return api
    .del<{ profile: types.Profile }>(`profiles/${username}/follow`)
    .then((x) => x.data.profile);
});

export const Gate = createGate<{ username?: string }>();
export const $username = Gate.state.map((x) => x?.username);

guard({
  source: $username,
  filter: Boolean,
  target: getProfileFx,
});

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
  visitor.model.$visitor,
  (profile, user) => profile.username === user.username,
);

export const $isNotCurrentUser = $isCurrentUser.map((is) => !is);
