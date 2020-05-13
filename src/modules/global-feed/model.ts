import {
  createEvent,
  createEffect,
  createStore,
  restore,
  sample,
} from 'effector';
import { get } from '../../api';
import { limit } from '../../library';
import { Feed } from '../types';

export const currentPageSetted = createEvent<number>();

export const fxFetchGlobalFeed = createEffect({
  handler: (page?: number) => get<Feed>(`/articles?${limit(10, page)}`),
});

export const $currentPage = restore(currentPageSetted, 1);
export const $globalFeed = createStore<Feed>({
  articles: [],
  articlesCount: 0,
});

export const $articles = $globalFeed.map(({ articles }) => articles);
export const $total = $globalFeed.map(({ articlesCount }) => articlesCount);

$globalFeed.on(fxFetchGlobalFeed.done, (_, { result }) => result);

sample({
  source: $currentPage,
  clock: currentPageSetted,
  target: fxFetchGlobalFeed,
});
