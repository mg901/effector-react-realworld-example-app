import { createEvent, createEffect, restore } from 'effector';
import { get } from '../../api';
import { limit } from '../../library';
import { Feed } from '../types';

export const currentPageSetted = createEvent<number>();

export const fxFetchGlobalFeed = createEffect({
  handler: (page?: number) => get<Feed>(`/articles?${limit(10, page)}`),
});

export const $currentPage = restore(currentPageSetted, 1);
export const $globalFeed = restore<Feed>(fxFetchGlobalFeed.doneData, {
  articles: [],
  articlesCount: 0,
});

export const $articles = $globalFeed.map(({ articles }) => articles);
export const $total = $globalFeed.map(({ articlesCount }) => articlesCount);
