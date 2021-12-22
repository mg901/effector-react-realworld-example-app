import * as api from 'shared/api';
import { FormValues } from './types';

export const changeUserData = async (payload: FormValues) => {
  const result = await api.put('user', {
    user: payload,
  });

  return result;
};
