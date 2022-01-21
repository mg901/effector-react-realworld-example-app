import * as http from '@/shared/http';
import * as types from './types';

export const getComments = (slug: string) => {
  return http
    .request<{ comments: types.CommentType[] }>({
      url: `articles/${slug}/comments`,
      method: 'get',
    })
    .then((response) => response.comments);
};

export const addComment = ({ slug, body }: types.AddCommentArgs) => {
  return http
    .request<{ comment: types.CommentType }>({
      url: `articles/${slug}/comments`,
      method: 'post',
      data: {
        comment: { body },
      },
    })
    .then((response) => response.comment);
};

export const deleteComment = ({ slug, id }: types.DeleteCommentArgs) => {
  return http.request({
    url: `articles/${slug}/comments/${id}`,
    method: 'delete',
  });
};
