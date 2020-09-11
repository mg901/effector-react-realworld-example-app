import { createEvent, createEffect, createStore, attach } from 'effector';
import { createGate } from 'effector-react';
import { model } from '@core/router';
import { limit } from '@library';
import { get } from '@api';
import * as types from '../../model/types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

const getFeedFx = createEffect((page: number) =>
  get<types.Feed>(`/articles/feed?${limit(10, page - 1)}`),
);

export const $currentPage = model.$search.map((x) => {
  const page = new URLSearchParams(x).get('page') ?? 1;

  return Number(page);
});

export const getYourFeedFx = attach({
  source: $currentPage,
  effect: getFeedFx,
});

export const $yourFeed = createStore<types.Feed>({
  articles: [],
  articlesCount: 0,
});

export const $articles = $yourFeed.map((x) => x.articles);
export const $totalPages = $yourFeed.map((x) => x.articlesCount);
