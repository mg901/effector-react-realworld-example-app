import * as http from 'shared/http';
import * as types from './types';

export const getComments = (slug: string) => {
  return http
    .get<{ comments: types.Comment[] }>(`articles/${slug}/comments`)
    .then((response) => response.data.comments);
};

export const addComment = ({ slug, body }: types.AddCommentPayload) => {
  return http
    .post<{ comment: types.Comment }>(`articles/${slug}/comments`, {
      comment: { body },
    })
    .then((response) => response.data.comment);
};

export const deleteComment = ({ slug, id }: types.DeleteCommentPayload) => {
  http.del(`articles/${slug}/comments/${id}`);
};
