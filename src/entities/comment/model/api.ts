import * as http from '@/shared/http';
import * as types from './types';

export const getComments = (slug: string) => {
  return http
    .request<{ comments: types.Comment[] }>({
      url: `articles/${slug}/comments`,
      method: 'get',
    })
    .then((response) => response.comments);
};

export const addComment = ({ slug, body }: types.AddCommentPayload) => {
  return http
    .request<{ comment: types.Comment }>({
      url: `articles/${slug}/comments`,
      method: 'post',
      data: {
        comment: { body },
      },
    })
    .then((response) => response.comment);
};

export const deleteComment = ({ slug, id }: types.DeleteCommentPayload) => {
  http.request({
    url: `articles/${slug}/comments/${id}`,
    method: 'delete',
  });
};
