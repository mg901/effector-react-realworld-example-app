import { createEvent, createEffect, createStore, attach } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../../../api';
import * as router from '../../../../core/router';
import { limit } from '../../../../library';
import * as types from '../../model/types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

const getFeedFx = createEffect((page: number) =>
  get<types.Feed>(`/articles?${limit(10, page - 1)}`),
);

export const $currentPage = router.model.$search.map((x) => {
  const page = new URLSearchParams(x).get('page') ?? 1;

  return Number(page);
});

export const getGlobalFeedFx = attach({
  source: $currentPage,
  effect: getFeedFx,
});

export const $globalFeed = createStore<types.Feed>({
  articles: [],
  articlesCount: 0,
});

export const $articles = $globalFeed.map((x) => x.articles);
export const $totalPages = $globalFeed.map((x) => x.articlesCount);
