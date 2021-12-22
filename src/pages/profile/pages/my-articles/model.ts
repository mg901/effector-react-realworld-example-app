import { createEffect } from 'effector';
import { useStore } from 'effector-react';

import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';

export type GetFeedFxArgs = {
  username: string;
  page: number;
  pageSize: number;
};

export const getFeedFx = createEffect(
  async ({ username, page, pageSize }: GetFeedFxArgs) => {
    const pageIndex = page - 1;

    const { data } = await api.get<article.types.FeedType>(
      `articles?author=${encodeURIComponent(username)}&${limit(
        pageSize,
        pageIndex,
      )}`,
    );

    return data;
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
