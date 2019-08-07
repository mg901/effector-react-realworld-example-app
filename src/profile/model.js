import { createEvent, createEffect, createStore, combine } from 'effector';
import * as api from '../api';
import { $currentUser } from '../models/user';

export const leavePage = createEvent();
export const asyncGetProfile = createEffect().use((user) =>
  api.profile.get(user),
);
export const asyncFollow = createEffect();
export const asyncUnfollow = createEffect();

export const $profile = createStore({})
  .on(asyncGetProfile.done, (state, { result }) => ({
    ...state,
    ...result.profile,
  }))
  .reset(leavePage);

export const $isCurrentUser = combine(
  $currentUser,
  $profile,
  (currentUser, profile) => currentUser.username === profile.username,
);
