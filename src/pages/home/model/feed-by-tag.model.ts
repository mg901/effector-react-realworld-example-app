import { createEvent, createEffect, createStore, combine } from 'effector';
import { createGate } from 'effector-react';
import { $location } from '../../../router';
import { get } from '../../../api';
import { limit, getPageFromQueryParamsFx } from '../../../library';
import * as T from './types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getFeedByTagFx = createEffect({
  handler: ({ tag, page }: T.GetFeedByTagArgs) =>
    get<T.Feed>(
      `/articles?tag=${encodeURIComponent(tag)}&${limit(10, page - 1)}`,
    ),
});

export const $currentTag = $location.map(
  (x) => new URLSearchParams(x.search).get('name') as string,
);

export const $currentPage = createStore(1)
  .on(
    [currentPageSetted, getPageFromQueryParamsFx.doneData],
    (_, payload) => payload,
  )
  .reset($currentTag.updates);

export const $feed = createStore<Record<string, T.Feed>>({}).on(
  getFeedByTagFx.done,
  (state, { params, result }) => ({
    ...state,
    [params.tag]: result,
  }),
);

export const $feedByTag = combine(
  $feed,
  $currentTag,
  (feed, tag) =>
    feed[tag] ?? {
      articles: [],
      articlesCount: 0,
    },
);

export const $articles = $feedByTag.map((x) => x.articles);
export const $totalPages = $feedByTag.map((x) => x.articlesCount);
