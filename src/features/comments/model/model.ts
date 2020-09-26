import { createEvent, createEffect, createStore } from 'effector';
import * as api from 'api';
import { createFormEvents } from 'library/form';
import * as router from 'library/router';
import * as types from './types';

export const { textChanged, handleTextChanged } = createFormEvents();
export const formSubmitted = createEvent<React.FormEvent>();
export const commentDeleted = createEvent<string>();

export const getCommentsFx = createEffect((slug: string) =>
  api
    .get<types.GetCommentsFxDone>(`/articles/${slug}/comments`)
    .then((x) => x.comments),
);

export const addCommentFx = createEffect<
  types.AddCommentFxArgs,
  types.Comment,
  types.ErrorType
>({
  handler: ({ slug, body }) =>
    api
      .post<types.AddCommentDone>(`/articles/${slug}/comments`, { body })
      .then((x) => x.comment),
});

export const deleteCommentFx = createEffect(
  ({ slug, id }: types.DeleteCommentFxArgs) =>
    api.del(`/articles/${slug}/comments/${id}`),
);

export const $commentText = createStore<string>('');
export const $comments = createStore<readonly types.Comment[]>([]);
export const $errors = createStore<types.ErrorType>({ errors: [] });
export const $slug = router.model.$pathname.map((x) =>
  x.replace(/^\/article\//, ''),
);
