import { createEvent, createEffect, createStore, merge } from 'effector';
import { del, post, get } from '../request';
import { $token } from '../auth/model';

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

export const changeTab = createEvent();

export const getArticles = createEffect().use((page) =>
  get(`/articles?${limit(10, page)}`),
);

export const getFeed = createEffect().use(() =>
  get('/articles/feed?limit=10&offset=0'),
);

export const setFavoriteArticle = createEffect().use((slug) =>
  post(`/articles/${slug}/favorite`),
);
export const setUnfavoriteArticle = createEffect().use((slug) =>
  del(`/articles/${slug}/favorite`),
);

export const $articles = createStore({});

$articles.on(merge([getArticles.done, getFeed.done]), (store, { result }) => ({
  ...store,
  ...result,
}));

$token.watch((token) => (token ? getFeed() : getArticles()));
