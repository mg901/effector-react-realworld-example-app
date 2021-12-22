import {
  createEvent,
  createEffect,
  createStore,
  restore,
  forward,
} from 'effector';
import { useStore, createGate } from 'effector-react';
import * as api from 'shared/api';
import * as endpoints from './endpoints';
import * as types from './types';

export const commentDeleted = createEvent<types.DeleteCommentPayload>();

export const getCommentsFx = createEffect(endpoints.getComments);

export const addCommentFx = createEffect<
  types.AddCommentPayload,
  types.Comment,
  api.types.ApiError<Record<string, unknown>>
>(endpoints.addComment);

export const deleteCommentFx = createEffect<
  types.DeleteCommentPayload,
  void,
  api.types.ApiError<Record<string, unknown>>
>(endpoints.deleteComment);

forward({
  from: commentDeleted,
  to: deleteCommentFx,
});

export const $comments = restore(getCommentsFx.doneData, [])
  .on(addCommentFx.doneData, (state, payload) => [payload].concat(state))
  .on(deleteCommentFx.done, (state, { params }) =>
    state.filter(({ id }) => id !== params.id),
  );

export const Gate = createGate();
export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on(
    [addCommentFx.failData, deleteCommentFx.failData],
    (_, error) => error.response?.data,
  )
  .reset(Gate.close);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useAddCommentFxPending: () => useStore(addCommentFx.pending),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
