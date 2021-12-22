import * as api from 'shared/api';
import * as types from './types';

export const getComments = async (slug: string) => {
  const { data } = await api.get<{ comments: types.Comment[] }>(
    `articles/${slug}/comments`,
  );

  return data.comments;
};

export const addComment = async ({ slug, body }: types.AddCommentPayload) => {
  const { data } = await api.post<{ comment: types.Comment }>(
    `articles/${slug}/comments`,
    {
      comment: { body },
    },
  );

  return data.comment;
};

export const deleteComment = ({ slug, id }: types.DeleteCommentPayload) => {
  api.del(`articles/${slug}/comments/${id}`);
};
