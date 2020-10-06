import { combine } from 'effector';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from '../../../api';
import { model } from '../../../modules/app';
import * as types from './types';

export const toggleFollowing = model.domain.createEvent<React.MouseEvent>();

export const fetchProfileFx = model.domain.createEffect((username: string) =>
  request
    .get<types.GetProfileFxDone>(`profiles/${username}`)
    .then((x) => x.data.profile),
);

export const subscribeFx = model.domain.createEffect<
  string,
  types.Profile,
  AxiosError
>({
  handler: (username: string) =>
    request.post(`profiles/${username}/follow`).then((x) => x.data.profile),
});

export const unsubscribeFx = model.domain.createEffect((username: string) =>
  request
    .delete<types.GetProfileFxDone>(`profiles/${username}/follow`)
    .then((x) => x.data.profile),
);

export const Gate = createGate<types.GateState>();

export const $username = model.domain.createStore<string>('');
export const $profile = model.domain.createStore<types.Profile>({
  bio: '',
  following: false,
  image: '',
  username: '',
});

export const $following = $profile.map((x) => x.following);
export const $thenSubscribed = $profile.map((x) => x.following === true);
export const $thenUnsubscribed = $profile.map((x) => x.following === false);

export const $isCurrentUser = combine(
  $profile,
  model.$user,
  (profile, user) => profile.username === user.username,
);

export const $isAnotherUser = $isCurrentUser.map((x) => !x);
