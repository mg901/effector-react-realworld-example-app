import { createEvent, createEffect, createStore, restore } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../../../api';
import { Feed } from '../../types';
import { limit, getPageFromQueryParamsFx } from '../../../../library';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getYourFeedFx = createEffect({
  handler: (page = 1) =>
    get<Feed>(`/articles/feed?${limit(10, (page as number) - 1)}`),
});

export const $currentPage = createStore<number>(1).on(
  [currentPageSetted, getPageFromQueryParamsFx.doneData],
  (_, payload) => payload,
);

export const $yourFeed = restore<Feed>(getYourFeedFx.doneData, {
  articles: [],
  articlesCount: 0,
});

export const $$articles = $yourFeed.map((x) => x.articles);
export const $$total = $yourFeed.map((x) => x.articlesCount);
