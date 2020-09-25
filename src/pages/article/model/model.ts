import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as comments from 'features/comments';
import * as router from 'library/router';
import * as types from './types';

export const getArticleFx = createEffect((slug: string) =>
  api
    .get<types.GetArticleFxDone>(`/articles/${slug}`)
    .then((x) => x.article)
    .then(({ createdAt, ...article }) => ({
      ...article,
      createdAt: new Date(createdAt).toDateString(),
    })),
);

export const getPageDataFx = createEffect((slug: string) =>
  Promise.all([getArticleFx(slug), comments.model.getCommentsFx(slug)]),
);

export const $slug = router.model.$pathname.map((x) =>
  x.replace(/^\/article\//, ''),
);

export const PageGate = createGate();
export const $article = createStore<types.Article>({
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
