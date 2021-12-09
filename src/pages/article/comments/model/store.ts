import {
  createEvent,
  createEffect,
  createStore,
  restore,
  forward,
} from 'effector';
import { useStore, createGate } from 'effector-react';
import * as api from 'shared/api';
import * as types from './types';

export const commentDeleted = createEvent<types.DeleteCommentArgs>();

export const getCommentsFx = createEffect((slug: string) => {
  return api
    .get<{ comments: types.Comment[] }>(`articles/${slug}/comments`)
    .then((response) => response.data.comments);
});

export const addCommentFx = createEffect<
  types.AddCommentFxArgs,
  types.Comment,
  api.types.ApiError<Record<string, unknown>>
>(({ slug, body }) => {
  return api
    .post<{ comment: types.Comment }>(`articles/${slug}/comments`, {
      comment: { body },
    })
    .then((response) => response.data.comment);
});

export const deleteCommentFx = createEffect<
  types.DeleteCommentArgs,
  void,
  api.types.ApiError<Record<string, unknown>>
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
