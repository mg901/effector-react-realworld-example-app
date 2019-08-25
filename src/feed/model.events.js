import { createEffect } from 'effector';
import { get } from '../request';
import { limit } from '../helpers';

export const getFavoritePostsByAuthor = createEffect().use((author, page) =>
  get(`/articles?favorited=${encodeURIComponent(author)}&${limit(5, page)}`),
);

export const getPostsByAuthor = createEffect().use((author, page) =>
  get(`/articles?author=${encodeURIComponent(author)}&${limit(5, page)}`),
);

export const getGlobalFeed = createEffect().use((page) =>
  get(`/articles?${limit(10, page)}`),
);

export const getUserFeed = createEffect().use(() =>
  get('/articles/feed?limit=10&offset=0'),
);

export const getFeedByTag = createEffect().use((tag, page) =>
  get(`/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`),
);
