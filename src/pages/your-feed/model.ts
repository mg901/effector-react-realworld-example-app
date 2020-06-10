import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../api';
import { Feed } from '../types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getYourFeedFx = createEffect({
  handler: () => get<Feed>('/articles/feed?limit=10&offset=0'),
});

export const $currentPage = createStore<number>(1);
export const $personalFeed = createStore<Feed>({
  articles: [],
  articlesCount: 0,
});

export const $$articles = $personalFeed.map((x) => x.articles);
export const $$total = $personalFeed.map((x) => x.articlesCount);
