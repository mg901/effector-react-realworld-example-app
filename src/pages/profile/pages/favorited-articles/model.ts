import { createEffect } from 'effector';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';

export type FetchFeedFxArgs = Readonly<{
  username: string;
  pageIndex: number;
  pageSize: number;
}>;

export const getFeedFx = createEffect<FetchFeedFxArgs, article.types.FeedType>(
  ({ username, pageIndex, pageSize }) => {
    return api
      .get(
        `articles?favorited=${encodeURIComponent(username)}&${limit(
          pageSize,
          pageIndex,
        )}`,
      )
      .then((x) => x.data);
  },
);

export const {
  paginationChanged,
  favoriteArticleToggled,
  $pageIndex,
  $pageSize,
  $articles,
  selectors,
} = article.model.createFeed({
  effect: getFeedFx,
  pageSize: 5,
});
