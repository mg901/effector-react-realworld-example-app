import * as http from '@/shared/http';
import * as types from './types';

export const getProfile = (username: string) => {
  return http.client
    .request<{ profile: types.Profile }>({
      url: `/profiles/${username}`,
      method: 'GET',
    })
    .then((response) => response.profile);
};

export const subscribeToUser = (username: string) => {
  return http.client
    .request<{ profile: types.Profile }>({
      url: `/profiles/${username}/follow`,
      method: 'POST',
    })
    .then((response) => response.profile);
};

export const unsubscribeToUser = (username: string) => {
  return http.client
    .request<{ profile: types.Profile }>({
      url: `/profiles/${username}/follow`,
      method: 'DELETE',
    })
    .then((response) => response.profile);
};
