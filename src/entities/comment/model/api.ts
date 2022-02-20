import { api } from '@/shared/api';
import * as types from './types';

export const getCommentList = (slug: string) =>
  api
    .request<{ comments: types.CommentType[] }>({
      url: `/articles/${slug}/comments`,
      method: 'GET',
    })
    .then((response) => response.comments);

export const add = ({ slug, body }: types.AddCommentArgs) =>
  api
    .request<{ comment: types.CommentType }>({
      url: `/articles/${slug}/comments`,
      method: 'POST',
      body: {
        comment: { body },
      },
    })
    .then((response) => response.comment);

export const remove = ({ slug, id }: types.RemoveCommentArgs) =>
  api.request({
    url: `/articles/${slug}/comments/${id}`,
    method: 'DELETE',
  });
