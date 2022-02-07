import { createStore, combine, guard } from 'effector';
import { useStore, createGate } from 'effector-react';
import { history, createParamsStore, ROUTES } from '@/shared/router';
import * as comment from '@/entities/comment';
import * as article from '@/entities/foo';
import * as session from '@/entities/session';

export const Gate = createGate();

export const $slug = createParamsStore<{ slug: string }>({
  path: ROUTES.currentArticle,
}).map((params) => params?.slug ?? '');

guard({
  source: $slug,
  filter: Boolean,
  clock: Gate.open,
  target: [article.getFx, comment.getCommentsFx],
});

export const $comments = createStore<comment.types.CommentType[]>([])
  .on(comment.getCommentsFx.doneData, (_, payload) => payload)
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

export const $currentArticle = createStore<article.types.Article>({
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
}).on(article.getFx.doneData, (_, payload) => payload);

const $author = $currentArticle.map((x) => x.author);

export const $canModifyArticle = combine(
  $currentArticle,
  session.$visitor,
  ({ author }, user) => author.username === user.username,
);

article.deleteFx.done.watch(() => {
  history.push(ROUTES.root);
});

export const selectors = {
  useSlug: () => useStore($slug),
  useComments: () => useStore($comments),
  useAuthor: () => useStore($author),
  useCanModifyArticle: () => useStore($canModifyArticle),
  useCurrentArticle: () => useStore($currentArticle),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
