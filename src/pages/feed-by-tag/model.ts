import {
  createEvent,
  createEffect,
  createStore,
  combine,
  restore,
  merge,
} from 'effector';
import { createGate } from 'effector-react';
import { Location, History } from 'history';
import { $location, history } from '../../router';
import { get } from '../../api';
import { limit } from '../../library';
import { Feed } from '../types';
import { GetFeedByTagPayload, SetPageToQueryParamPayload } from './types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getFeedByTagFx = createEffect({
  handler: ({ tag, page }: GetFeedByTagPayload) =>
    get<Feed>(
      `/articles?tag=${encodeURIComponent(tag)}&${limit(10, page - 1)}`,
    ),
});

export const setPageToQueryParamFx = createEffect({
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

export const $$currentTag = $location.map(
  (x) => new URLSearchParams(x.search).get('name') as string,
);

export const $currentPage = restore(
  merge([currentPageSetted, getPageFromQueryParamsFx.doneData]),
  1,
).reset($$currentTag.updates);

export const $feed = createStore<Record<string, Feed>>({}).on(
  getFeedByTagFx.done,
  (state, { params, result }) => ({
    ...state,
    [params.tag]: result,
  }),
);

export const $$feedByTag = combine(
  $feed,
  $$currentTag,
  (feed, tag) =>
    feed[tag] ?? {
      articles: [],
      articlesCount: 0,
    },
);

export const $$articles = $$feedByTag.map((x) => x.articles);
export const $$total = $$feedByTag.map((x) => x.articlesCount);
