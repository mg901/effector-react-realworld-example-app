import { createEvent, createEffect, createStore } from 'effector';
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

export const deleteCommentFx = createEffect(
  ({ slug, id }: types.DeleteCommentFxArgs) =>
    request.delete<void>(`articles/${slug}/comments/${id}`),
);

export const Gate = createGate<GateState>();

export const $slug = Gate.state.map((x) => x.id);
export const $comments = createStore<readonly types.Comment[]>([]);
export const $errors = createStore<types.Errors>({
  errors: {},
});

export const form = createForm({
  fields: {
    comment: {
      init: '' as string,
    },
  },
});
