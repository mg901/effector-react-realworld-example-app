import {
  createEvent,
  createEffect,
  createStore,
  merge,
  combine,
} from 'effector';
import { del, post, get } from '../request';
import { getUser, $token } from '../auth/model';

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

getUser.done.watch(() => {
  getFeed();
});

$token.watch((token) => {
  if (!token) getArticles();
});

export const $articles = createStore({ articles: [], articlesCount: null }).on(
  merge([getFeed.done, getArticles.done]),
  (state, { result }) => ({ ...state, ...result }),
);

export const $isLoading = combine(
  getFeed.pending,
  getArticles.pending,
  (feed, articles) => feed || articles,
);

$articles.watch((item) => console.log('articles', item));
