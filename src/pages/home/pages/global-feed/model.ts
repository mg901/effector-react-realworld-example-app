import { createEffect, createStore, StoreValue } from 'effector';
import { useStore } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { syncPaginationWithQueryParams } from 'features/sync-pagination-with-query-params';

import { limit } from 'shared/library/limit';

export type getFeedFxArgs = {
  pageSize: number;
  pageIndex: number;
};

export const getFeedFx = createEffect<getFeedFxArgs, article.types.FeedType>(
  ({ pageSize, pageIndex }) =>
    api.get(`articles?${limit(pageSize, pageIndex)}`).then((x) => x.data),
);

export const {
  favoriteArticleToggled,
  $feed,
  $isEmptyFeed,
  $articles,
  $totalPages,
} = article.model.createFeed({
  effect: getFeedFx,
});

export const $pageSize = createStore(10);

export const { queryParamsSetted, $pageIndex, $pageNumber } =
  syncPaginationWithQueryParams();

export const selectors = {
  useGetFeedPending: (): boolean => useStore(getFeedFx.pending),

  useIsEmptyFeed: (): StoreValue<typeof $isEmptyFeed> => useStore($isEmptyFeed),
  useTotalPages: (): StoreValue<typeof $totalPages> => useStore($totalPages),

  usePageSize: (): StoreValue<typeof $pageSize> => useStore($pageSize),
  usePageNumber: (): StoreValue<typeof $pageNumber> => useStore($pageNumber),
  usePageIndex: (): StoreValue<typeof $pageIndex> => useStore($pageIndex),
};
