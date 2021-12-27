import {
  createEvent,
  createEffect,
  createStore,
  combine,
  split,
} from 'effector';
import { useStore } from 'effector-react';
import * as visitor from 'entities/visitor';
import * as http from 'shared/http';
import * as api from './api';
import * as types from './types';

export const followToggled = createEvent<types.FollowToggledArgs>();
export const getProfileFx = createEffect(api.getProfile);

export const subscribeToUserFx = createEffect<
  string,
  types.Profile,
  http.types.ApiError
>(api.subscribeToUser);

export const unsubscribeFromUserFx = createEffect(api.unsubscribeToUser);

export const $profile = createStore({
  bio: '',
  following: false,
  image: '',
  username: '',
}).on(
  [
    getProfileFx.doneData,
    subscribeToUserFx.doneData,
    unsubscribeFromUserFx.doneData,
  ],
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
    canFollowed: unsubscribeFromUserFx.prepend(
      (p: types.Profile) => p.username,
    ),
    cantFollowed: subscribeToUserFx.prepend((p: types.Profile) => p.username),
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
  useUserName: () => useStore($username),
  useImage: () => useStore($image),
};
