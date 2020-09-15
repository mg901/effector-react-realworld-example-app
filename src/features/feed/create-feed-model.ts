import { createEvent, createStore } from 'effector';
import * as router from '../../library/router';
import * as types from './types';

type Options = Readonly<{
  currentPage: number;
}>;

const defaultOptions = {
  currentPage: 1,
};

export const createFeedModel = (
  options: Options = defaultOptions,
): types.CreateFeedModel => {
  const $feed = createStore<types.Feed>({
    articles: [],
    articlesCount: 0,
  });

  return {
    currentPageSetted: createEvent<number>(),
    $currentPage: router.model.$search.map((x) => {
      const page = new URLSearchParams(x).get('page') ?? options.currentPage;

      return Number(page);
    }),

    $currentTag: router.model.$search.map(
      (x) => new URLSearchParams(x).get('tag') ?? '',
    ),
    $feed,
    $articles: $feed.map((x) => x.articles),
    $totalPages: $feed.map((x) => x.articlesCount),
  };
};
