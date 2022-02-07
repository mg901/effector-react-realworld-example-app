import * as http from '@/shared/http';
import * as types from './types';

export const getCommentList = (slug: string) =>
  http
    .request<{ comments: types.CommentType[] }>({
      url: `articles/${slug}/comments`,
      method: 'get',
    })
    .then((response) => response.comments);

export const add = ({ slug, body }: types.AddCommentArgs) =>
  http
    .request<{ comment: types.CommentType }>({
      url: `articles/${slug}/comments`,
      method: 'post',
      data: {
        comment: { body },
      },
    })
    .then((response) => response.comment);

export const remove = ({ slug, id }: types.RemoveCommentArgs) =>
  http.request({
    url: `articles/${slug}/comments/${id}`,
    method: 'delete',
  });
