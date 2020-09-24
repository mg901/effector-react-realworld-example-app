import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as types from './types';

export const getArticleFx = createEffect((slug: string) =>
  api
    .get<types.ArticleResponse>(`/articles/${slug}`)
    .then((response) => response.article),
);

export const getCommentFx = createEffect((slug: string) =>
  api
    .get<types.getCommentsFxDone>(`/articles/${slug}/comments`)
    .then((response) => response.comments),
);

export const getPageDataFx = createEffect(({ id }: any) =>
  Promise.all([getArticleFx(id), getCommentFx(id)]),
);

export const PageGate = createGate<types.PageGateType>();
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
export const $comments = createStore<readonly types.Comment[]>([]);
