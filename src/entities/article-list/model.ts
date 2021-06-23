import { createStore, combine } from 'effector-root';
import { createGate } from 'effector-react';
import { EffectState } from 'patronum/status';

import * as types from './types';

const defaultOptions = {
  currentPage: 1,
  pageSize: 10,
  status: createStore<EffectState>('initial'),
};

export const createFeedModel = (options: types.Options = defaultOptions) => {
  const opts = Object.assign(defaultOptions, options);

  const Gate = createGate();
  const $pageSize = createStore<number>(opts.pageSize);

  const $feed = createStore<types.Feed>({
    articles: [],
    articlesCount: 0,
  });

  const $articles = $feed.map((x) => x.articles);
  const $status = opts.status;

  const $isEmptyFeed = combine(
    $status,
    $articles,
    (is, articles) => is === 'done' && articles.length === 0,
  );

  return {
    Gate,
    $pageSize,
    $articles,
    $feed,
    $isEmptyFeed,
  };
};
