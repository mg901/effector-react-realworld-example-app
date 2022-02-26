import { createEvent, createEffect, createStore, sample } from 'effector';
import { useStore } from 'effector-react';
import * as api from './api';
import * as types from './types';

export const getCommentsFx = createEffect(api.getCommentList);

export const addCommentFx = createEffect<
  types.AddCommentArgs,
  types.IComment,
  Record<string, unknown>
>(api.add);

export const attachSlug = createEvent<string>();
const $slug = createStore<string>('').on(attachSlug, (_, slug) => slug);

export const submitForm = createEvent<{ body: string }>();

sample({
  clock: submitForm,
  source: $slug,
  fn: (slug, fields) => ({ slug, ...fields }),
  target: addCommentFx,
});

export const removeComment = createEvent<string>();
export const removeCommentFx = createEffect<
  types.RemoveCommentArgs,
  void,
  Record<string, unknown>
>(api.remove);

sample({
  clock: removeComment,
  source: $slug,
  fn: (slug, id) => ({ slug, id }),
  target: removeCommentFx,
});

export const resetError = createEvent();
export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on([addCommentFx.failData, removeCommentFx.failData], (_, error) => error)
  .reset(resetError);

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
