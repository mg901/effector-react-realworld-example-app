import { createEvent, createStore } from 'effector';
import * as router from '../router';
import * as types from './types';

export const createFeedModel = (): types.CreateFeedModel => {
  const $feed = createStore<types.Feed>({
    articles: [],
    articlesCount: 0,
  });

  return {
    currentPageSetted: createEvent<number>(),
    $currentPage: router.model.$search.map((x) => {
      const page = new URLSearchParams(x).get('page') ?? 1;

      return Number(page);
    }),

    $currentTag: router.model.$search.map(
      (x) => new URLSearchParams(x).get('name') as string,
    ),
    $feed: createStore<types.Feed>({
      articles: [],
      articlesCount: 0,
    }),
    $articles: $feed.map((x) => x.articles),
    $totalPages: $feed.map((x) => x.articlesCount),
  };
};
