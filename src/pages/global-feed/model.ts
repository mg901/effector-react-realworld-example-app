import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import withStorage from 'effector-storage';
import { get } from '../../api';
import { limit } from '../../library';
import { Feed } from '../types';
import { CurrentPage } from './types';

const createStorageStore = withStorage(createStore);
export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getGlobalFeedFx = createEffect({
  handler: (page: CurrentPage) =>
    get<Feed>(`/articles?${limit(10, (page as number) - 1)}`),
});

export const $currentPage = createStorageStore<CurrentPage>(1, {
  key: 'global-feed/current-page',
});

export const $globalFeed = createStore<Feed>({
  articles: [],
  articlesCount: 0,
});

export const $$articles = $globalFeed.map((x) => x.articles);
export const $$total = $globalFeed.map((x) => x.articlesCount);
