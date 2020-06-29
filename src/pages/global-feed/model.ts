import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import { Location, History } from 'history';
import { history } from '../../router';

import { get } from '../../api';
import { limit } from '../../library';
import { Feed } from '../types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getGlobalFeedFx = createEffect({
  handler: (page = 1) => get<Feed>(`/articles?${limit(10, page - 1)}`),
});

export const setQueryParamFx = createEffect({
  handler: (page: number) => {
    history.push(page > 1 ? `/global-feed?page=${page}` : '/global-feed');
  },
});

export const getPageFromQueryParamsFx = createEffect({
  handler: ({ search }: Location<History.PoorMansUnknown>) => {
    const page = new URLSearchParams(search).get('page') ?? 1;

    return page ? Number(page) : 1;
  },
});

export const $currentPage = createStore<number>(1);

export const $globalFeed = createStore<Feed>({
  articles: [],
  articlesCount: 0,
});

export const $$articles = $globalFeed.map((x) => x.articles);
export const $$total = $globalFeed.map((x) => x.articlesCount);
