import { createEffect, sample } from 'effector';
import { createGate } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';
import * as profile from '../../model';

export type FetchFeedFxArgs = Readonly<{
  username: string;
  pageIndex: number;
  pageSize: number;
}>;

export const fetchFeedFx = createEffect<
  FetchFeedFxArgs,
  article.types.FeedType
>(({ username, pageIndex, pageSize }) => {
  return api
    .get(
      `articles?author=${encodeURIComponent(username)}&${limit(
        pageSize,
        pageIndex,
      )}`,
    )
    .then((x) => x.data);
});

export const Gate = createGate();

export const {
  paginationChanged,
  favoriteArticleToggled,
  $pageIndex,
  $pageSize,
  $articles,
  selectors,
} = article.model.createFeed({
  effect: fetchFeedFx,
  pageSize: 5,
});

sample({
  source: {
    username: profile.model.$username,
    pageIndex: $pageIndex,
    pageSize: $pageSize,
  },
  clock: [Gate.open, paginationChanged],
  target: fetchFeedFx,
});
