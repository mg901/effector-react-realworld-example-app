import * as http from '@/shared/http';
import * as types from './types';

export const getProfile = (username: string) => {
  return http
    .request<{ profile: types.Profile }>({
      url: `profiles/${username}`,
      method: 'get',
    })
    .then((response) => response.profile);
};

export const subscribeToUser = (username: string) => {
  return http
    .request<{ profile: types.Profile }>({
      url: `profiles/${username}/follow`,
      method: 'post',
    })
    .then((response) => response.profile);
};

export const unsubscribeToUser = (username: string) => {
  return http
    .request<{ profile: types.Profile }>({
      url: `profiles/${username}/follow`,
      method: 'delete',
    })
    .then((response) => response.profile);
};
