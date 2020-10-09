import {
  createEvent,
  createEffect,
  createStore,
  forward,
  attach,
  sample,
} from 'effector-root';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from '../../../../api';
import { GateState } from '../../model/types';
import * as types from './types';

export const commentDeleted = createEvent<string>();
export const fetchCommentsFx = createEffect((slug: string) =>
  request
    .get<types.GetCommentsFxDone>(`articles/${slug}/comments`)
    .then((x) => x.data.comments),
);

export const fetchCommentFx = createEffect<
  types.AddCommentFxArgs,
  types.Comment,
  AxiosError
>({
  handler: ({ slug, body }) =>
    request
      .post<{ comment: types.Comment }>(`articles/${slug}/comments`, { body })
      .then((x) => x.data.comment),
});

export const deleteCommentFx = createEffect<
  types.DeleteCommentFxArgs,
  void,
  AxiosError
>({
  handler: ({ slug, id }) => request.delete(`articles/${slug}/comments/${id}`),
});

export const Gate = createGate<GateState>();

export const $slug = Gate.state.map((x) => x.id);
export const $comments = createStore<readonly types.Comment[]>([])
  .on(fetchCommentsFx.doneData, (_, payload) => payload)
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

forward({
  from: $slug.updates,
  to: attach({
    source: $slug,
    effect: fetchCommentsFx,
  }),
});

// submit form
forward({
  from: form.submit,
  to: attach({
    source: {
      slug: $slug,
      body: form.fields.comment.$value,
    },
    effect: fetchCommentFx,
  }),
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

export const $errors = createStore<types.Errors>({
  errors: {},
})
  .on(
    [fetchCommentFx.failData, deleteCommentFx.failData],
    (_, error) => error.response?.data,
  )
  .reset(form.$touched);
