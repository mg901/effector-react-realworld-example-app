import * as http from '@/shared/http';
import * as types from './types';

export const getVisitor = () => {
  return http
    .request<{ user: types.Visitor }>({
      url: 'user',
      method: 'get',
    })
    .then((response) => response.user);
};
