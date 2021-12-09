import {
  createEvent,
  createEffect,
  createStore,
  combine,
  split,
} from 'effector';
import { useStore } from 'effector-react';
import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import * as types from './types';

export const followToggled = createEvent<types.FollowToggledArgs>();

export const getProfileFx = createEffect((username: string) => {
  return api
    .get<{ profile: types.Profile }>(`profiles/${username}`)
    .then((response) => response.data.profile);
});

export const subscribeFx = createEffect<
  string,
  types.Profile,
  api.types.ApiError
>((username) => {
  return api
    .post<{ profile: types.Profile }>(`profiles/${username}/follow`)
    .then((response) => response.data.profile);
});

export const unsubscribeFx = createEffect((username: string) => {
  return api
    .del<{ profile: types.Profile }>(`profiles/${username}/follow`)
    .then((response) => response.data.profile);
});

export const $profile = createStore({
  bio: '',
  following: false,
  image: '',
  username: '',
}).on(
  [getProfileFx.doneData, subscribeFx.doneData, unsubscribeFx.doneData],
  (_, payload) => payload,
);

export const $bio = $profile.map((x) => x.bio);
export const $image = $profile.map((x) => x.image);
export const $username = $profile.map((x) => x.username);
export const $following = $profile.map((profile) => profile.following);

split({
  source: followToggled,
  match: {
    canFollowed: (p) => p.following === true,
    cantFollowed: (p) => p.following === false,
  },
  cases: {
    canFollowed: unsubscribeFx.prepend((p: types.Profile) => p.username),
    cantFollowed: subscribeFx.prepend((p: types.Profile) => p.username),
  },
});

export const $isVisitor = combine(
  $profile,
  visitor.$visitor,
  (profile, user) => profile.username === user.username,
);

export const selectors = {
  useIsVisitor: () => useStore($isVisitor),
  useFollowing: () => useStore($following),
  useBio: () => useStore($bio),
  useUsername: () => useStore($username),
  useImage: () => useStore($image),
};
