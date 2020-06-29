import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import { Location, History } from 'history';
import { get } from '../../api';
import { history } from '../../router';
import { Feed } from '../types';
import { limit } from '../../library';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getYourFeedFx = createEffect({
  handler: (page = 1) =>
    get<Feed>(`/articles/feed?${limit(10, (page as number) - 1)}`),
});

export const setQueryParamFx = createEffect({
  handler: (page: number) => {
    history.push(page > 1 ? `/your-feed?page=${page}` : '/your-feed');
  },
});

export const getPageFromQueryParamsFx = createEffect({
  handler: ({ search }: Location<History.PoorMansUnknown>) => {
    const page = new URLSearchParams(search).get('page') ?? 1;

    return page ? Number(page) : 1;
  },
});

export const $currentPage = createStore<number>(1);
export const $yourFeed = createStore<Feed>({
  articles: [],
  articlesCount: 0,
});

export const $$articles = $yourFeed.map((x) => x.articles);
export const $$total = $yourFeed.map((x) => x.articlesCount);
