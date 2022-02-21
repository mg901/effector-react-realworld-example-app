import { createEvent, createStore, combine, sample } from 'effector';
import { useStore } from 'effector-react';
import * as comment from '@/entities/comment';
import * as article from '@/entities/foo';
import * as session from '@/entities/session';

export const mount = createEvent();
export const attachSlug = createEvent<string>();
const $slug = createStore('').on(attachSlug, (_, payload) => payload);

sample({
  clock: mount,
  source: $slug,
  filter: Boolean,
  target: [article.store.getArticleFx, comment.store.getCommentsFx],
});

export const $comments = createStore<comment.types.CommentType[]>([])
  .on(comment.store.getCommentsFx.doneData, (_, payload) => payload)
  .on(comment.store.addCommentFx.doneData, (state, payload) =>
    [payload].concat(state),
  )
  .on(comment.store.removeCommentFx.done, (state, { params }) =>
    state.filter(({ id }) => id !== params.id),
  );

export const resetError = createEvent();
export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on(
    [
      comment.store.addCommentFx.failData,
      comment.store.removeCommentFx.failData,
    ],
    (_, error) => error,
  )

  .reset(resetError);

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
}).on(article.store.getArticleFx.doneData, (_, payload) => payload);

const $author = $currentArticle.map((x) => x.author);

export const $canModifyArticle = combine(
  $currentArticle,
  session.store.$session,
  ({ author }, user) => author.username === user.username,
);

export const selectors = {
  useSlug: () => useStore($slug),
  useComments: () => useStore($comments),
  useAuthor: () => useStore($author),
  useCanModifyArticle: () => useStore($canModifyArticle),
  useCurrentArticle: () => useStore($currentArticle),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
