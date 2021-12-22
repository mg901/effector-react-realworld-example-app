import * as api from 'shared/api';
import * as types from './types';

export const getProfile = async (username: string) => {
  const { data } = await api.get<{ profile: types.Profile }>(
    `profiles/${username}`,
  );

  return data.profile;
};

export const subscribeToUser = async (username: string) => {
  const { data } = await api.post<{ profile: types.Profile }>(
    `profiles/${username}/follow`,
  );

  return data.profile;
};

export const unsubscribeToUser = async (username: string) => {
  const { data } = await api.del<{ profile: types.Profile }>(
    `profiles/${username}/follow`,
  );

  return data.profile;
};
