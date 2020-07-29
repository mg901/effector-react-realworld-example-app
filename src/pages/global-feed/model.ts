import { createEvent, createEffect, restore, merge } from 'effector';
import { createGate } from 'effector-react';
import { Location, History } from 'history';
import { history } from '../../router';

import { get } from '../../api';
import { limit } from '../../library';
import { Feed } from '../types';
import { SetPageToQueryParamPayload } from './types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getGlobalFeedFx = createEffect({
  handler: (page = 1) => get<Feed>(`/articles?${limit(10, page - 1)}`),
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

export const $currentPage = restore(
  merge([currentPageSetted, getPageFromQueryParamsFx.doneData]),
  1,
);

export const $globalFeed = restore(getGlobalFeedFx.doneData, {
  articles: [],
  articlesCount: 0,
});

export const $$articles = $globalFeed.map((x) => x.articles);
export const $$total = $globalFeed.map((x) => x.articlesCount);
