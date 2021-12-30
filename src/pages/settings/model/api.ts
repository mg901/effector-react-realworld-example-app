import * as http from '@/shared/http';
import { FormInputs } from './types';

export const changeUserData = (payload: FormInputs) => {
  return http.request({
    url: 'user',
    method: 'put',
    data: {
      user: payload,
    },
  });
};
