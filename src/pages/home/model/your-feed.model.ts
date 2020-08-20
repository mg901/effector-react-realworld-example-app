import { createEvent, createEffect, createStore, restore } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../../api';
import { limit, getPageFromQueryParamsFx } from '../../../library';
import * as T from './types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getYourFeedFx = createEffect({
  handler: (page = 1) =>
    get<T.Feed>(`/articles/feed?${limit(10, (page as number) - 1)}`),
});

export const $currentPage = createStore<number>(1).on(
  [currentPageSetted, getPageFromQueryParamsFx.doneData],
  (_, payload) => payload,
);

export const $yourFeed = restore<T.Feed>(getYourFeedFx.doneData, {
  articles: [],
  articlesCount: 0,
});

export const $articles = $yourFeed.map((x) => x.articles);
export const $totalPages = $yourFeed.map((x) => x.articlesCount);
