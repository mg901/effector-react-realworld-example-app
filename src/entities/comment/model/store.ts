import { createEvent, createEffect, createStore, sample } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as api from './api';
import * as types from './types';

export const Gate = createGate<{ slug: string }>();
const $slug = Gate.state.map((props) => props.slug);

export const getCommentsFx = createEffect(api.getComments);

export const formSubmitted = createEvent<{ body: string }>();
export const addCommentFx = createEffect<
  types.AddCommentArgs,
  types.CommentType,
  Record<string, unknown>
>(api.addComment);

sample({
  source: $slug,
  clock: formSubmitted,
  fn: (slug, fields) => ({ slug, ...fields }),
  target: addCommentFx,
});

export const commentDeleted = createEvent<string>();
export const deleteCommentFx = createEffect<
  types.DeleteCommentArgs,
  void,
  Record<string, unknown>
>(api.deleteComment);

sample({
  source: $slug,
  clock: commentDeleted,
  fn: (slug, id) => ({ slug, id }),
  target: deleteCommentFx,
});

export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on([addCommentFx.failData, deleteCommentFx.failData], (_, error) => error)
  .reset(Gate.close);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useAddCommentFxLoading: () => useStore(addCommentFx.pending),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
