import * as http from '@/shared/http';
import * as types from './types';

export const getUser = () =>
  http.client
    .request<types.UserResponse>({
      url: '/user',
      method: 'GET',
    })
    .then((response) => response);

export const changeUser = (fields: types.UpdateUserArgs) =>
  http.client
    .request<types.UserResponse>({
      url: '/user',
      method: 'PUT',
      body: {
        user: !fields.password ? { ...fields, password: undefined } : fields,
      },
    })
    .then((response) => response);
