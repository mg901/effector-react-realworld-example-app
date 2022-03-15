import * as http from '@/shared/http';
import * as types from './types';

export const getCommentList = (slug: string) =>
  http.client
    .request<{ comments: types.IComment[] }>({
      url: `/articles/${slug}/comments`,
      method: 'GET',
    })
    .then((response) => response.comments);

export const add = ({ slug, body }: types.AddCommentArgs) =>
  http.client
    .request<{ comment: types.IComment }>({
      url: `/articles/${slug}/comments`,
      method: 'POST',
      body: {
        comment: { body },
      },
    })
    .then((response) => response.comment);

export const remove = ({ slug, id }: types.RemoveCommentArgs) =>
  http.client
    .request({
      url: `/articles/${slug}/comments/${id}`,
      method: 'DELETE',
    })
    .then((response) => response);
