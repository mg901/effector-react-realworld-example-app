import { createEvent, createEffect, restore, forward, sample } from 'effector';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import * as errorsList from 'features/error-list';
import * as api from 'shared/api';
import { GateState } from '../../model/types';
import * as types from './types';

export const commentDeleted = createEvent<string>();

export const fetchCommentsFx = createEffect<string, types.Comments>((slug) => {
  return api.get(`articles/${slug}/comments`).then((x) => x.data.comments);
});

export const fetchCommentFx = createEffect<
  types.AddCommentFxArgs,
  types.Comment,
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
  return api.remove(`articles/${slug}/comments/${id}`);
});

export const Gate = createGate<GateState>();

export const $slug = Gate.state.map((props) => props.slug);

export const $comments = restore(fetchCommentsFx.doneData, [])
  .on(fetchCommentFx.doneData, (state, payload) => [payload, ...state])
  .on(deleteCommentFx.done, (state, { params }) =>
    state.filter(({ id }) => id !== params.id),
  );

export const form = createForm({
  fields: {
    comment: {
      init: '' as string,
    },
  },
});

sample({
  source: $slug,
  clock: $slug.updates,
  target: fetchCommentsFx,
});

// submit form
sample({
  source: {
    slug: $slug,
    body: form.fields.comment.$value,
  },
  clock: form.submit,
  target: fetchCommentFx,
});

// reset form
forward({
  from: fetchCommentFx,
  to: form.reset,
});

sample({
  source: $slug,
  clock: commentDeleted,
  fn: (slug, id) => ({ slug, id }),
  target: deleteCommentFx,
});

errorsList.model.$errors
  .on(
    [fetchCommentFx.failData, deleteCommentFx.failData],
    (_, error) => error.response?.data,
  )
  .reset(form.$touched);
