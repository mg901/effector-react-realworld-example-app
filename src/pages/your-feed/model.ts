import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import withStorage from 'effector-storage';
import { get } from '../../api';
import { Feed } from '../types';
import { CurrentPage } from './types';
import { limit } from '../../library';

const createStorageStore = withStorage(createStore);
export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getYourFeedFx = createEffect({
  handler: (page: CurrentPage) =>
    get<Feed>(`/articles/feed?${limit(10, (page as number) - 1)}`),
});

getYourFeedFx.finally.watch((x) => console.log('your feed', x));

export const $currentPage = createStorageStore<CurrentPage>(1, {
  key: 'your-feed/current-page',
});
export const $personalFeed = createStore<Feed>({
  articles: [],
  articlesCount: 0,
});

export const $$articles = $personalFeed.map((x) => x.articles);
export const $$total = $personalFeed.map((x) => x.articlesCount);
