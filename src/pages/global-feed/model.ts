import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../api';
import { limit } from '../../library';
import { Feed } from '../types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getGlobalFeedFx = createEffect({
  handler: (page?: number) => get<Feed>(`/articles?${limit(10, page)}`),
});

export const $currentPage = createStore<number>(0);
export const $globalFeed = createStore<Feed>({
  articles: [],
  articlesCount: 0,
});

export const $$articles = $globalFeed.map((x) => x.articles);
export const $$total = $globalFeed.map((x) => x.articlesCount);
