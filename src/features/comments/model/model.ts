import { createEvent, createEffect, createStore } from 'effector';
import * as api from 'api';
import * as router from 'library/router';
import * as types from './types';

export const formSubmitted = createEvent<React.FormEvent>();
export const textChanged = createEvent<string>();
export const commentDeleted = createEvent<string>();

export const handleTextChanged = textChanged.prepend(
  (e: React.ChangeEvent<HTMLTextAreaElement>) => e.target.value,
);

export const getCommentsFx = createEffect((slug: string) =>
  api
    .get<types.GetCommentsFxDone>(`/articles/${slug}/comments`)
    .then((x) => x.comments),
);

export const addCommentFx = createEffect(
  ({ slug, body }: types.AddCommentFxArgs) =>
    api
      .post<types.AddCommentDone>(`/articles/${slug}/comments`, { body })
      .then((x) => x.comment),
);

export const deleteCommentFx = createEffect(
  ({ slug, id }: types.DeleteCommentFxArgs) =>
    api.del(`/articles/${slug}/comments/${id}`),
);

export const $commentText = createStore<string>('');
export const $comments = createStore<readonly types.Comment[]>([]);
export const $slug = router.model.$pathname.map((x) =>
  x.replace(/^\/article\//, ''),
);
