import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import { get, post, del } from '../../../api';
import * as T from './types';

export const getProfileFx = createEffect({
  handler: (username: string) =>
    get<T.ProfileResponse>(`/profiles/${username}`),
});

export const followUserFx = createEffect({
  handler: (username: string) => post(`/profiles/${username}/follow`),
});

export const unfollowUserFx = createEffect({
  handler: (username: string) => del(`/profiles/${username}/follow`),
});

export const ProfileGate = createGate<T.ProfileGateProps>();
export const FavoritedArticlesGate = createGate();

export const $profile = createStore<T.Profile>({
  bio: '',
  following: false,
  image: '',
  username: '',
}).on(getProfileFx.doneData, (_, { profile }) => profile);
