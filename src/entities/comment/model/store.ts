import { createEvent, createEffect, createStore, sample } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as api from './api';
import * as types from './types';

export const Gate = createGate<{ slug: string }>();
const $slug = Gate.state.map((props) => props.slug);

export const getCommentsFx = createEffect(api.getCommentList);
export const addFx = createEffect<
  types.AddCommentArgs,
  types.CommentType,
  Record<string, unknown>
>(api.add);

export const submitForm = createEvent<{ body: string }>();

sample({
  source: $slug,
  clock: submitForm,
  fn: (slug, fields) => ({ slug, ...fields }),
  target: addFx,
});

export const removeComment = createEvent<string>();
export const removeFx = createEffect<
  types.RemoveCommentArgs,
  void,
  Record<string, unknown>
>(api.remove);

sample({
  source: $slug,
  clock: removeComment,
  fn: (slug, id) => ({ slug, id }),
  target: removeFx,
});

export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on([addFx.failData, removeFx.failData], (_, error) => error)
  .reset(Gate.close);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useAddCommentFxLoading: () => useStore(addFx.pending),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
