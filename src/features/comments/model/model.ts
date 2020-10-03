import { createEvent, createEffect, createStore } from 'effector';
import { AxiosError } from 'axios';
import { request } from 'api';
import { createFormEvents } from 'library/form';
import * as router from 'library/router';
import * as types from './types';

export const {
  textChanged,
  handleTextChanged,
  formSubmitted,
} = createFormEvents();
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

export const $commentText = createStore<string>('');
export const $comments = createStore<readonly types.Comment[]>([]);
export const $errors = createStore<types.Errors>({
  errors: {},
});

export const $slug = router.model.$pathname.map((x) =>
  x.replace(/^\/article(\/)?/, ''),
);
