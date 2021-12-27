import * as http from 'shared/http';
import { FormValues } from './types';

export const changeUserData = (payload: FormValues) => {
  return http.put('user', {
    user: payload,
  });
};
