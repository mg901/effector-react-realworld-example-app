import { request } from '../../../../../api';
import { model } from '../../../../../app';
import * as feed from '../../../../../features/feed';
import { limit } from '../../../../../library/limit';
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

export const fetchFeedFx = model.domain.createEffect(
  ({ pageSize, page }: types.fetchFeedFxArgs) =>
    request
      .get<feed.types.Feed>(`articles?${limit(pageSize, page)}`)
      .then((x) => x.data),
);
