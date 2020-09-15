import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from '../../../api';
import * as types from './types';

export const getProfileFx = createEffect((username: string) =>
  api.get<types.ProfileResponse>(`/profiles/${username}`),
);

export const followUserFx = createEffect((username: string) =>
  api.post(`/profiles/${username}/follow`),
);

export const unfollowUserFx = createEffect((username: string) =>
  api.del(`/profiles/${username}/follow`),
);

export const ProfileGate = createGate<types.ProfileGateProps>();
export const FavoritedArticlesGate = createGate();

export const $profile = createStore<types.Profile>({
  bio: '',
  following: false,
  image: '',
  username: '',
}).on(getProfileFx.doneData, (_, { profile }) => profile);
