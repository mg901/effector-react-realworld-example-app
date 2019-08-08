import { createEvent, createEffect, createStore, combine } from 'effector';
import { get } from '../request';
import { $currentUser } from '../models/user';

export const leavePage = createEvent();
export const getProfile = createEffect().use((username) =>
  get(`/profiles/${username}`),
);
export const follow = createEffect();
export const unfollow = createEffect();

export const $profile = createStore({})
  .on(getProfile.done, (state, { result }) => ({
    ...state,
    ...result.profile,
  }))
  .reset(leavePage);

export const $isCurrentUser = combine(
  $currentUser,
  $profile,
  (currentUser, profile) => currentUser.username === profile.username,
);
