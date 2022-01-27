import {
  createEvent,
  createEffect,
  createStore,
  split,
  sample,
} from 'effector';
import { useStore, createGate } from 'effector-react';
import * as visitor from '@/entities/visitor';
import {
  createParamsStore,
  createRouteMatchStore,
  ROUTES,
} from '@/shared/router';
import * as api from './api';
import * as types from './types';

export const followToggled = createEvent<types.FollowToggledArgs>();

export const getProfileFx = createEffect(api.getProfile);
export const subscribeToUserFx = createEffect(api.subscribeToUser);
export const unsubscribeFromUserFx = createEffect(api.unsubscribeToUser);

export const Gate = createGate();

const $username = createParamsStore<{ username: string }>({
  path: ROUTES.profile.root,
}).map((params) => params.username);

export const $pageUrl = createRouteMatchStore<{ url: string }>({
  path: ROUTES.profile.root,
}).map((x) => x?.url);

sample({
  source: $username,
  clock: [Gate.open, $username],
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

const $isOwnProfile = createStore(false).on(
  sample({
    source: [visitor.$username, $profileUsername],
    clock: $profileUsername.updates,
  }),
  (_, [visitorUsername, profileUsername]) =>
    visitorUsername === profileUsername,
);

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
