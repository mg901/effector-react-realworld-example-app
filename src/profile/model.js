import { createEvent, createEffect, createStore, combine } from 'effector';
import { get, post, del } from '../request';
import { $authUser } from '../auth';

export const leavePage = createEvent();
export const fetchProfile = createEffect().use(({ username }) =>
  get(`/profiles/${username}`),
);
export const followReq = createEffect().use(({ username }) =>
  post(`/profiles/${username}/followReq`),
);
export const unfollowReq = createEffect().use(({ username }) =>
  del(`/profiles/${username}/followReq`),
);

export const $profile = createStore({})
  .on(fetchProfile.done, (state, { result }) => ({
    ...state,
    ...result.profile,
  }))
  .reset(leavePage);

export const $isCurrentUser = combine(
  $authUser,
  $profile,
  (currentUser, profile) => currentUser.username === profile.username,
);
