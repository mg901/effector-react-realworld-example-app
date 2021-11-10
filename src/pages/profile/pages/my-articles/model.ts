import { createEffect, createStore, guard, StoreValue } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';
import { syncPaginationWithQueryParams } from 'shared/library/sync-pagination-with-query-params';
import * as profile from '../../model';

export type getFeedFxArgs = {
  username: string;
  pageIndex: number;
  pageSize: number;
};

export const getFeedFx = createEffect(
  ({ username, pageIndex, pageSize }: getFeedFxArgs) => {
    return api
      .get<article.types.FeedType>(
        `articles?author=${encodeURIComponent(username)}&${limit(
          pageSize,
          pageIndex,
        )}`,
      )
      .then((x) => x.data);
  },
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

export const $pageSize = createStore(5);

export const { queryParamsSetted, $pageIndex, $pageNumber } =
  syncPaginationWithQueryParams();

export const Gate = createGate();

guard({
  source: {
    username: profile.model.$username,
    pageSize: $pageSize,
    pageIndex: $pageIndex,
  },
  filter: (x): x is getFeedFxArgs => Boolean(x.username),
  clock: [Gate.open, queryParamsSetted],
  target: getFeedFx,
});

export const selectors = {
  useGetFeedPending: (): boolean => useStore(getFeedFx.pending),

  useIsEmptyFeed: (): StoreValue<typeof $isEmptyFeed> => useStore($isEmptyFeed),
  useTotalPages: (): StoreValue<typeof $totalPages> => useStore($totalPages),

  usePageSize: (): StoreValue<typeof $pageSize> => useStore($pageSize),
  usePageNumber: (): StoreValue<typeof $pageNumber> => useStore($pageNumber),
};
