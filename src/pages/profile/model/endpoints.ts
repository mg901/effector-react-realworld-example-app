import * as api from 'shared/api';
import * as types from './types';

export const getProfile = (username: string) => {
  return api
    .get<{ profile: types.Profile }>(`profiles/${username}`)
    .then((response) => response.data.profile);
};

export const subscribeToUser = (username: string) => {
  return api
    .post<{ profile: types.Profile }>(`profiles/${username}/follow`)
    .then((response) => response.data.profile);
};

export const unsubscribeToUser = (username: string) => {
  return api
    .del<{ profile: types.Profile }>(`profiles/${username}/follow`)
    .then((response) => response.data.profile);
};
