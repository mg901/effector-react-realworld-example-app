import { createEffect, sample } from 'effector-root';
import { status } from 'patronum/status';
import * as articleList from 'entities/article-list';
import * as patination from 'features/pagination';
import * as toggleLike from 'features/toggle-like-on-article';
import { api } from 'shared/api';
import { limit } from 'shared/library/limit';
import * as types from './types';

export const fetchFeedFx = createEffect<
  types.fetchFeedFxArgs,
  articleList.types.ArticleList
>(({ pageSize, page }) => {
  return api.get(`articles?${limit(pageSize, page)}`).then(({ data }) => data);
});

export const { Gate, $feed, $articles, $pageSize, $isEmptyFeed } =
  articleList.createFeedModel({
    status: status({ effect: fetchFeedFx }),
  });

export const $articlesCount = $feed.map((x) => x.articlesCount);

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

export const { favoriteToggled } = toggleLike.model.createToggleLike($feed);
export const { $currentPage, currentPageWasSet } =
  patination.model.createPagination();

sample({
  source: {
    pageSize: $pageSize,
    page: $currentPage,
  },
  clock: [Gate.open, currentPageWasSet],
  target: fetchFeedFx,
});
