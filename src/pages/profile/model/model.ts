import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as types from './types';

export const toggleFollowing = createEvent();

export const getProfileFx = createEffect((username: string) =>
  api.get<types.ProfileResponse>(`/profiles/${username}`),
);

export const followUserFx = createEffect((username: string) =>
  api.post<types.ProfileResponse>(`/profiles/${username}/follow`),
);

export const unfollowUserFx = createEffect((username: string) =>
  api.del<types.ProfileResponse>(`/profiles/${username}/follow`),
);

export const PageGate = createGate<types.PageGateType>();

export const $username = createStore<string>('');
export const $profile = createStore<types.Profile>({
  bio: '',
  following: false,
  image: '',
  username: '',
});

export const $following = $profile.map((x) => x.following);
export const $follow = $profile.map((x) => x.following === true);
export const $unfollow = $profile.map((x) => x.following === false);
