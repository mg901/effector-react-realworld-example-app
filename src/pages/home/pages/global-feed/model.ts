import { createEffect, StoreValue } from 'effector';
import { useStore } from 'effector-react';
import * as article from 'entities/article';
import { createPagination } from 'features/pagination';
import * as api from 'shared/api';

import { limit } from 'shared/library/limit';

export type getFeedFxArgs = Readonly<{
  pageSize: number;
  pageIndex: number;
}>;

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

export const { paginationChanged, $pageSize, $pageIndex, $pageNumber } =
  createPagination({
    pageSize: 10,
  });

export const selectors = {
  useGetFeedPending: (): boolean => useStore(getFeedFx.pending),

  useIsEmptyFeed: (): StoreValue<typeof $isEmptyFeed> => useStore($isEmptyFeed),
  useTotalPages: (): StoreValue<typeof $totalPages> => useStore($totalPages),

  usePageSize: (): StoreValue<typeof $pageSize> => useStore($pageSize),
  usePageNumber: (): StoreValue<typeof $pageNumber> => useStore($pageNumber),
  usePageIndex: (): StoreValue<typeof $pageIndex> => useStore($pageIndex),
};
