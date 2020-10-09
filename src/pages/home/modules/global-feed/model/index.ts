import { request } from '../../../../../api';
import { limit } from '../../../../../library/limit';
import * as feed from '../../../../../modules/feed';
import { root } from '../../../../../root';
import * as types from './types';

export const {
  Gate,
  currentPageWasSet,
  favoriteToggled,
  $currentPage,
  $articles,
  $totalPages,
  $feed,
  $pageSize,
  useModel,
} = feed.createFeedModel();

export const fetchFeedFx = root.createEffect(
  ({ pageSize, page }: types.fetchFeedFxArgs) =>
    request
      .get<feed.types.Feed>(`articles?${limit(pageSize, page)}`)
      .then((x) => x.data),
);
