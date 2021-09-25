import { createEvent, createEffect, restore, forward } from 'effector';
import * as api from 'shared/api';
import * as errorsList from 'widgets/error-list';
import * as types from './types';

export const commentDeleted = createEvent<types.DeleteCommentArgs>();

export const getCommentsFx = createEffect<string, types.Comment[]>((slug) => {
  return api.get(`articles/${slug}/comments`).then((x) => x.data.comments);
});

export const addCommentFx = createEffect<
  types.AddCommentFxArgs,
  types.Comment,
  api.types.ApiError
>(({ slug, body }) => {
  return api
    .post(`articles/${slug}/comments`, { body })
    .then((x) => x.data.comment);
});

export const deleteCommentFx = createEffect<
  types.DeleteCommentArgs,
  void,
  api.types.ApiError
>(({ slug, id }) => {
  return api.del(`articles/${slug}/comments/${id}`);
});

forward({
  from: commentDeleted,
  to: deleteCommentFx,
});

export const $comments = restore(getCommentsFx.doneData, [])
  .on(addCommentFx.doneData, (state, payload) => [payload].concat(state))
  .on(deleteCommentFx.done, (state, { params }) =>
    state.filter(({ id }) => id !== params.id),
  );

errorsList.model.$errors.on(
  [addCommentFx.failData, deleteCommentFx.failData],
  (_, error) => error.response?.data,
);
