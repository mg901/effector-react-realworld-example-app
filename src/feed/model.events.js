import { createEffect, createEvent } from 'effector';
import { get } from '../request';
import { limit } from '../helpers';

export const globalFeedMount = createEvent();

export const fetchFavoritePostsByAuthor = createEffect().use(
  ({ author, page }) =>
    get(`/articles?favorited=${encodeURIComponent(author)}&${limit(5, page)}`),
);

export const fetchPostsByAuthor = createEffect().use(({ author, page }) =>
  get(`/articles?author=${encodeURIComponent(author)}&${limit(5, page)}`),
);

export const fetchGlobalFeed = createEffect().use((page) =>
  get(`/articles?${limit(10, page)}`),
);

export const fetchUserFeed = createEffect().use(() =>
  get('/articles/feed?limit=10&offset=0'),
);

export const fetchFeedByTag = createEffect().use((tag, page) =>
  get(`/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`),
);
