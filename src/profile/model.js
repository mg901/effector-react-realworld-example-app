import { createEvent, createEffect, createStore, combine } from 'effector';
import { get, post, del } from '../request';
import { $authUser } from '../auth/model.store';

export const leavePage = createEvent();
export const getProfile = createEffect().use((username) =>
  get(`/profiles/${username}`),
);
export const follow = createEffect().use((username) =>
  post(`/profiles/${username}/follow`),
);
export const unfollow = createEffect().use((username) =>
  del(`/profiles/${username}/follow`),
);

export const $profile = createStore({})
  .on(getProfile.done, (state, { result }) => ({
    ...state,
    ...result.profile,
  }))
  .reset(leavePage);

export const $isCurrentUser = combine(
  $authUser,
  $profile,
  (currentUser, profile) => currentUser.username === profile.username,
);
