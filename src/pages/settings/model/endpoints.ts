import * as api from 'shared/api';
import { FormValues } from './types';

export const changeUserData = (payload: FormValues) => {
  return api.put('user', {
    user: payload,
  });
};
