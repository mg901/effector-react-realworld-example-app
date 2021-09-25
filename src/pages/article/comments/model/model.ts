import { createEvent, createEffect, restore, sample } from 'effector';
import { createGate } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import * as errorsList from 'widgets/error-list';
import { GateState } from '../../model/types';
import * as types from './types';

type Comment = types.Comment<article.types.Article>;

export const commentDeleted = createEvent<string>();

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

export const Gate = createGate<GateState>();

export const $slug = Gate.state.map((props) => props.slug);

export const $comments = restore(getCommentsFx.doneData, [])
  .on(getCommentFx.doneData, (state, payload) => [payload].concat(state))
  .on(deleteCommentFx.done, (state, { params }) =>
    state.filter(({ id }) => id !== params.id),
  );

sample({
  source: $slug,
  clock: commentDeleted,
  fn: (slug, id) => ({ slug, id }),
  target: deleteCommentFx,
});

errorsList.model.$errors.on(
  [getCommentFx.failData, deleteCommentFx.failData],
  (_, error) => error.response?.data,
);
