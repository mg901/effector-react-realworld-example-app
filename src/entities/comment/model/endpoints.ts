import * as api from 'shared/api';
import * as types from './types';

export const getComments = (slug: string) => {
  return api
    .get<{ comments: types.Comment[] }>(`articles/${slug}/comments`)
    .then((response) => response.data.comments);
};

export const addComment = ({ slug, body }: types.AddCommentPayload) => {
  return api
    .post<{ comment: types.Comment }>(`articles/${slug}/comments`, {
      comment: { body },
    })
    .then((response) => response.data.comment);
};

export const deleteComment = ({ slug, id }: types.DeleteCommentPayload) => {
  api.del(`articles/${slug}/comments/${id}`);
};
