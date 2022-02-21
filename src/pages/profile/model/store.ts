import {
  createEvent,
  createEffect,
  createStore,
  split,
  sample,
} from 'effector';
import { useStore } from 'effector-react';
import * as session from '@/entities/session';
import * as api from './api';
import * as types from './types';

export const mount = createEvent();
export const attachUsername = createEvent<string>();
const $username = createStore('').on(attachUsername, (_, payload) => payload);
export const getProfileFx = createEffect(api.getProfile);

sample({
  clock: [mount, $username],
  source: $username,
  target: getProfileFx,
});

export const followToggled = createEvent<types.FollowToggledArgs>();
export const subscribeToUserFx = createEffect(api.subscribeToUser);
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

export const $profileBio = $profile.map((x) => x.bio);
export const $profileImage = $profile.map((x) => x.image);
export const $profileUsername = $profile.map((x) => x.username);
export const $profileFollowing = $profile.map((profile) => profile.following);

const $isOwnProfile = createStore(false).on(
  sample({
    clock: $profileUsername.updates,
    source: [session.store.$username, $profileUsername],
  }),
  (_, [visitorUsername, profileUsername]) =>
    visitorUsername === profileUsername,
);

split({
  // @ts-ignore
  source: followToggled,
  match: {
    // @ts-ignore
    canFollowed: (p) => p.following === true,
    // @ts-ignore
    cantFollowed: (p) => p.following === false,
  },
  cases: {
    canFollowed: unsubscribeFromUserFx.prepend(
      (p: types.Profile) => p.username,
    ),
    cantFollowed: subscribeToUserFx.prepend((p: types.Profile) => p.username),
  },
});

export const selectors = {
  useIsOwnProfile: () => useStore($isOwnProfile),
  useFollowing: () => useStore($profileFollowing),
  useProfileBio: () => useStore($profileBio),
  useProfileUsername: () => useStore($profileUsername),
  useProfileImage: () => useStore($profileImage),
};
