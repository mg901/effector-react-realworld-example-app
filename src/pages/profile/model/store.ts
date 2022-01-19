import {
  createEvent,
  createEffect,
  createStore,
  split,
  sample,
} from 'effector';
import { useStore, createGate } from 'effector-react';
import * as visitor from '@/entities/visitor';
import { $locationPathname, matchPath, ROUTES } from '@/shared/router';
import * as api from './api';
import * as types from './types';

export const followToggled = createEvent<types.FollowToggledArgs>();

export const getProfileFx = createEffect(api.getProfile);
export const subscribeToUserFx = createEffect(api.subscribeToUser);
export const unsubscribeFromUserFx = createEffect(api.unsubscribeToUser);

export const Gate = createGate();
const $username = $locationPathname.map((pathname) => {
  const match = matchPath<{ username: string }>(pathname, {
    path: ROUTES.profile.root,
  });

  return match ? match.params.username : '';
});

export const $pageUrl = $locationPathname.map((pathname) => {
  const match = matchPath<{ username: string }>(pathname, {
    path: ROUTES.profile.root,
  });

  return match ? match.url : '';
});

sample({
  source: $username,
  clock: Gate.open,
  target: getProfileFx,
});

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

const $isOwnProfile = createStore(false);

sample({
  source: visitor.$username,
  clock: $profileUsername.updates,
  fn: (username, profileUsername) => {
    return username === profileUsername;
  },
  target: $isOwnProfile,
});

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

export const selectors = {
  useIsOwnProfile: () => useStore($isOwnProfile),
  usePageUrl: () => useStore($pageUrl),
  useFollowing: () => useStore($profileFollowing),
  useProfileBio: () => useStore($profileBio),
  useProfileUsername: () => useStore($profileUsername),
  useProfileImage: () => useStore($profileImage),
};
