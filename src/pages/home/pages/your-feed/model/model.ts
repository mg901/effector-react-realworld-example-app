import { createEffect } from 'effector';
import { status } from 'patronum/status';
import { request } from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import * as types from './types';

export const fetchFeedFx = createEffect(
  ({ pageSize, page }: types.fetchFeedFxArgs) =>
    request
      .get<feed.types.Feed>(`articles/feed?${limit(pageSize, page)}`)
      .then((x) => x.data),
);

export const {
  PageGate,
  currentPageWasSet,
  favoriteToggled,
  $currentPage,
  $feed,
  $articles,
  $pageSize,
  useModel,
} = feed.createFeedModel({
  status: status({ effect: fetchFeedFx }),
});
