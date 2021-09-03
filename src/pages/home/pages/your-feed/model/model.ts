import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';
import * as article from 'entities/article';
import { checkIsEmptyFeed } from 'features/check-is-empty-feed';
import * as api from 'shared/api';
import * as feed from 'shared/feed';
import { limit } from 'shared/library/limit';
import * as types from './types';

export const domain = createDomain('your-feed-page');
export const Gate = createGate();

export const fetchFeedFx = domain.createEffect<
  types.fetchFeedFxArgs,
  feed.types.Feed
>(({ pageSize, page }) => {
  return api.get(`articles/feed?${limit(pageSize, page)}`).then((x) => x.data);
});

export const $isEmptyFeed = checkIsEmptyFeed(
  article.model.$articles,
  fetchFeedFx,
);

export const $pageSize = domain.createStore<number>(10);

article.model.$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

sample({
  source: {
    pageSize: $pageSize,
    page: article.model.$currentPage,
  },
  clock: [Gate.open, article.model.currentPageWasSet],
  target: fetchFeedFx,
});
