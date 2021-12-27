import { createEffect } from 'effector';
import { useStore } from 'effector-react';

import * as article from 'entities/article';
import * as http from 'shared/http';
import { limit } from 'shared/library/limit';

export type GetFeedFxPayload = {
  username: string;
  page: number;
  pageSize: number;
};

export const getFeedFx = createEffect(
  ({ username, page, pageSize }: GetFeedFxPayload) => {
    const pageIndex = page - 1;

    return http
      .get<article.types.FeedType>(
        `articles?author=${encodeURIComponent(username)}&${limit(
          pageSize,
          pageIndex,
        )}`,
      )
      .then((response) => response.data);
  },
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

export const selectors = {
  useIsEmptyFeed: () => useStore($isEmptyFeed),
  useGetFeedPending: () => useStore(getFeedFx.pending),
  useTotalPages: () => useStore($totalPages),
};
