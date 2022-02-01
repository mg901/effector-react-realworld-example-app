import {
  createEvent,
  createEffect,
  createStore,
  restore,
  combine,
  forward,
  guard,
} from 'effector';
import { useStore, createGate } from 'effector-react';
import * as comment from '@/entities/comment';
import * as visitor from '@/entities/visitor';
import { history, createParamsStore, ROUTES } from '@/shared/router';
import * as api from './api';

export const articleDeleted = createEvent<string>();
export const getArticleFx = createEffect(api.getArticle);
export const deleteArticleFx = createEffect(api.deleteArticle);

export const Gate = createGate();

export const $slug = createParamsStore<{ slug: string }>({
  path: ROUTES.article,
}).map((params) => params?.slug ?? '');

guard({
  source: $slug,
  filter: Boolean,
  clock: Gate.open,
  target: [getArticleFx, comment.getCommentsFx],
});

export const $comments = restore(comment.getCommentsFx.doneData, [])
  .on(comment.addCommentFx.doneData, (state, payload) =>
    [payload].concat(state),
  )
  .on(comment.deleteCommentFx.done, (state, { params }) =>
    state.filter(({ id }) => id !== params.id),
  );

export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on(
    [comment.addCommentFx.failData, comment.deleteCommentFx.failData],
    (_, error) => error,
  )
  .reset(Gate.close);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const $article = restore(getArticleFx.doneData, {
  title: '',
  slug: '',
  body: '',
  createdAt: '',
  updatedAt: '',
  tagList: [],
  description: '',
  author: {
    username: '',
    bio: '',
    image: '',
    following: false,
  },
  favorited: false,
  favoritesCount: 0,
});

const $articleAuthor = $article.map((article) => article.author);

export const $canModifyArticle = combine(
  $article,
  visitor.$visitor,
  ({ author }, user) => author.username === user.username,
);

forward({
  from: articleDeleted,
  to: deleteArticleFx,
});

deleteArticleFx.done.watch(() => {
  history.push(ROUTES.root);
});

export const selectors = {
  useSlug: () => useStore($slug),
  useComments: () => useStore($comments),
  useGetArticleLoading: () => useStore(getArticleFx.pending),
  useArticleAuthor: () => useStore($articleAuthor),
  useCanModifyArticle: () => useStore($canModifyArticle),
  useArticle: () => useStore($article),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
