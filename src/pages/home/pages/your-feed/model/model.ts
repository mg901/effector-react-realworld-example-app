import { createEffect, sample } from 'effector-root';
import { status } from 'patronum/status';
import * as feed from 'entities/article-list';
import * as toggleLike from 'features/toggle-like-on-article';
import { api } from 'shared/api';
import { limit } from 'shared/library/limit';

export type fetchFeedFxArgs = Readonly<{
  pageSize: number;
  page: number;
}>;

export const fetchFeedFx = createEffect<fetchFeedFxArgs, feed.types.Feed>(
  ({ pageSize, page }) => {
    return api
      .get(`articles/feed?${limit(pageSize, page)}`)
      .then(({ data }) => data);
  },
);

export const { Gate, $feed, $articles, $pageSize, $isEmptyFeed } =
  feed.createFeedModel({
    status: status({ effect: fetchFeedFx }),
  });

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

export const { favoriteToggled } = toggleLike.model.createToggleLike($feed);

sample({
  source: {
    pageSize: $pageSize,
  },
  clock: [Gate.open],
  target: fetchFeedFx,
});
