import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from '../../../../api';
import { root } from '../../../../root';
import { GateState } from '../../model/types';
import * as types from './types';

export const commentDeleted = root.createEvent<string>();
export const fetchCommentsFx = root.createEffect((slug: string) =>
  request
    .get<types.GetCommentsFxDone>(`articles/${slug}/comments`)
    .then((x) => x.data.comments),
);

export const fetchCommentFx = root.createEffect<
  types.AddCommentFxArgs,
  types.Comment,
  AxiosError
>({
  handler: ({ slug, body }) =>
    request
      .post<{ comment: types.Comment }>(`articles/${slug}/comments`, { body })
      .then((x) => x.data.comment),
});

export const deleteCommentFx = root.createEffect<
  types.DeleteCommentFxArgs,
  void,
  AxiosError
>({
  handler: ({ slug, id }) => request.delete(`articles/${slug}/comments/${id}`),
});

export const Gate = createGate<GateState>();

export const $slug = Gate.state.map((x) => x.id);
export const $comments = root.createStore<readonly types.Comment[]>([]);
export const $errors = root.createStore<types.Errors>({
  errors: {},
});

export const form = createForm({
  fields: {
    comment: {
      init: '' as string,
    },
  },
});
