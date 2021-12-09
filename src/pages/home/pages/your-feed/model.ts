import { createEffect, createStore, StoreValue } from 'effector';
import { useStore } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';
import { syncPaginationWithQueryParams } from 'shared/library/sync-pagination-with-query-params';

export type getFeedFxArgs = Readonly<{
  pageSize: number;
  pageIndex: number;
}>;

export const getFeedFx = createEffect(
  ({ pageSize, pageIndex }: getFeedFxArgs) =>
    api
      .get<article.types.FeedType>(
        `articles/feed?${limit(pageSize, pageIndex)}`,
      )
      .then((response) => response.data),
);

export const {
  favoriteArticleToggled,
  $feed,
  $isEmptyFeed,
  $articles,
  $totalPages,
} = article.createFeed({
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
