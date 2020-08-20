import { createEvent, createEffect, restore, merge } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../../api';
import { limit, getPageFromQueryParamsFx } from '../../../library';
import * as T from './types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getGlobalFeedFx = createEffect({
  handler: (page = 1) => get<T.Feed>(`/articles?${limit(10, page - 1)}`),
});

export const $currentPage = restore(
  merge([currentPageSetted, getPageFromQueryParamsFx.doneData]),
  1,
);

export const $globalFeed = restore(getGlobalFeedFx.doneData, {
  articles: [],
  articlesCount: 0,
});

export const $articles = $globalFeed.map((x) => x.articles);
export const $totalPages = $globalFeed.map((x) => x.articlesCount);
