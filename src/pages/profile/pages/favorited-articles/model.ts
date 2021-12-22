import { createEffect } from 'effector';
import { useStore } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';

export type getFeedFxArgs = Readonly<{
  username: string;
  page: number;
  pageSize: number;
}>;

export const getFeedFx = createEffect(
  async ({ username, page, pageSize }: getFeedFxArgs) => {
    const pageIndex = page - 1;
    const { data } = await api.get<article.types.FeedType>(
      `articles?favorited=${encodeURIComponent(username)}&${limit(
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
