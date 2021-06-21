import {
  createEvent,
  createEffect,
  createStore,
  restore,
  forward,
  sample,
} from 'effector-root';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { api } from 'shared/api';
import { GateState } from '../../model/types';
import * as types from './types';

export const commentDeleted = createEvent<string>();

export const fetchCommentsFx = createEffect<string, types.Comments>((slug) => {
  return api.get(`articles/${slug}/comments`).then(({ data }) => data.comments);
});

export const fetchCommentFx = createEffect<
  types.AddCommentFxArgs,
  types.Comment,
  AxiosError
>(({ slug, body }) => {
  return api
    .post(`articles/${slug}/comments`, { body })
    .then(({ data }) => data.comment);
});

export const deleteCommentFx = createEffect<
  types.DeleteCommentFxArgs,
  void,
  AxiosError
>(({ slug, id }) => {
  return api.delete(`articles/${slug}/comments/${id}`);
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

export const $error = createStore<types.Errors>({
  errors: {},
})
  .on(
    [fetchCommentFx.failData, deleteCommentFx.failData],
    (_, error) => error.response?.data,
  )
  .reset(form.$touched);
