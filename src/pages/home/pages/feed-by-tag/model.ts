import { createEffect, createStore, StoreValue } from 'effector';
import { useStore } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';
import { syncPaginationWithQueryParams } from 'shared/library/sync-pagination-with-query-params';
import * as home from '../../model';

export type FetchFeedByTagArgs = Readonly<{
  tag: string;
  pageIndex: number;
  pageSize: number;
}>;

export const getFeedFx = createEffect(
  ({ tag, pageSize, pageIndex }: FetchFeedByTagArgs) =>
    api
      .get<article.types.FeedType>(
        `articles?tag=${encodeURIComponent(tag)}&${limit(pageSize, pageIndex)}`,
      )
      .then((x) => x.data),
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
  useCurrentTag: (): StoreValue<typeof home.model.$currentTag> =>
    useStore(home.model.$currentTag),
};
