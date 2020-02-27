import { createEffect } from 'effector';
import { get } from '../../api';
import { limit } from '../../lib';

type PostsByTag = {
  tag: string;
  page: number;
};

type PostsByAuthor = {
  author: string;
  page: number;
};

export const fxFetchFavoritePostsByAuthor = createEffect({
  handler: ({ author, page }: PostsByAuthor) => get(`/articles?favorited=${encodeURIComponent(author)}&${limit(5, page)}`),
});
export const fxFetchPostsByAuthorByAuthor = createEffect({
  handler: ({ author, page }: PostsByAuthor) => get(`/articles?author=${encodeURIComponent(author)}&${limit(5, page)}`),
});
export const fxFetchGlobalFeed = createEffect({
  handler: (page?: number) => get(`/articles?${limit(10, page)}`),
});

fxFetchGlobalFeed.done.watch((x) => console.log('fxFetchGlobalFeed', x));

export const fxFetchUserFeed = createEffect({
  handler: () => get('/articles/feed?limit=10&offset=0'),
});

export const fxFetchFeedByTag = createEffect({
  handler: ({ tag, page }: PostsByTag) => get(`/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`),
});
