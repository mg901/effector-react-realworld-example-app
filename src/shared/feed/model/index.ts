import { createEvent, createStore, sample, combine } from 'effector-root';
import { createGate, useStore } from 'effector-react';

import { EffectState } from 'patronum/status';
import * as router from 'shared/library/router';
import * as types from './types';

const defaultOptions = {
  currentPage: 1,
  pageSize: 10,
  status: createStore<EffectState>('initial'),
};

export const createFeedModel = (
  options: types.Options = defaultOptions,
): types.CreateFeedModel => {
  const opts = {
    ...defaultOptions,
    ...options,
  };

  // events
  const currentPageWasSet = createEvent<number>();
  const $pageSize = createStore<number>(opts.pageSize);
  const $currentTag = router.model.$search.map(
    (search) => new URLSearchParams(search).get('tag') ?? '',
  );

  const $currentPage = router.model.$search.map((search) => {
    const page = new URLSearchParams(search).get('page') ?? opts.currentPage;

    return Number(page) - 1;
  });

  // reducer
  const $feed = createStore<types.Feed>({
    articles: [],
    articlesCount: 0,
  });

  const $articles = $feed.map((x) => x.articles);
  const $totalPages = $feed.map((x) => x.articlesCount);
  const $status = opts.status;

  const $isEmptyFeed = combine(
    $status,
    $articles,
    (is, articles) => is === 'done' && articles.length === 0,
  );

  sample({
    source: router.model.$pathname,
    clock: currentPageWasSet,
    fn: (path, page) => ({ path, page }),
  }).watch(({ path, page }) => {
    router.history.replace(`${path}?page=${page}`);
  });

  const $model = combine({
    pageSize: $pageSize,
    currentPage: $currentPage,
    currentTag: $currentTag,
    totalPages: $totalPages,
    isEmptyFeed: $isEmptyFeed,
  });

  return {
    Gate: createGate(),
    currentPageWasSet,
    $feed,
    $articles,
    $pageSize,
    $currentPage,
    $currentTag,
    $totalPages,
    $isEmptyFeed,
    useModel: () => useStore($model),
  };
};
