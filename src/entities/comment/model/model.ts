import { createEvent, createEffect } from 'effector';
import * as api from 'shared/api';
import * as types from './types';

export const commentAdded = createEvent();
export const commentDeleted = createEvent();

export const getCommentsFx = createEffect<string, Comment[]>((slug) => {
  return api.get(`articles/${slug}/comments`).then((x) => x.data.comments);
});

export const getCommentFx = createEffect<
  types.AddCommentFxArgs,
  Comment,
  api.types.ApiError
>(({ slug, body }) => {
  return api
    .post(`articles/${slug}/comments`, { body })
    .then((x) => x.data.comment);
});

export const deleteCommentFx = createEffect<
  types.DeleteCommentFxArgs,
  void,
  api.types.ApiError
>(({ slug, id }) => {
  return api.del(`articles/${slug}/comments/${id}`);
});
