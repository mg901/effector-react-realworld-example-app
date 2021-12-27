import * as http from 'shared/http';
import * as types from './types';

export const getProfile = (username: string) => {
  return http
    .get<{ profile: types.Profile }>(`profiles/${username}`)
    .then((response) => response.data.profile);
};

export const subscribeToUser = (username: string) => {
  return http
    .post<{ profile: types.Profile }>(`profiles/${username}/follow`)
    .then((response) => response.data.profile);
};

export const unsubscribeToUser = (username: string) => {
  return http
    .del<{ profile: types.Profile }>(`profiles/${username}/follow`)
    .then((response) => response.data.profile);
};
