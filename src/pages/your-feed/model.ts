import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import { Location, History } from 'history';
import { get } from '../../api';
import { history } from '../../router';
import { Feed } from '../types';
import { limit } from '../../library';
import { SetPageToQueryParamPayload } from './types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getYourFeedFx = createEffect({
  handler: (page = 1) =>
    get<Feed>(`/articles/feed?${limit(10, (page as number) - 1)}`),
});

export const setPageToQueryParamsFx = createEffect({
  handler: ({ pathname, search, page }: SetPageToQueryParamPayload) => {
    const params = new URLSearchParams(search);

    if (page > 1) {
      params.set('page', String(page));
    } else {
      params.delete('page');
    }

    history.replace(`${pathname}?${params}`);
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
