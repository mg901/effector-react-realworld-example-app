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

export const $username = createParamsStore<{ username: string }>({
  path: ROUTES.profile.root,
}).map((params) => params.username);

export const $pageUrl = createRouteMatchStore<{ url: string }>({
  path: ROUTES.profile.root,
}).map((match) => match?.url);

sample({
  source: $username,
  clock: [Gate.open, $username],
  target: getProfileFx,
});

export const $editableFields = createStore({
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

export const $profileBio = $editableFields.map((fields) => fields.bio);
export const $profileImage = $editableFields.map((fields) => fields.image);
export const $profileUsername = $editableFields.map(
  (fields) => fields.username,
);
export const $profileFollowing = $editableFields.map(
  (profile) => profile.following,
);

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
