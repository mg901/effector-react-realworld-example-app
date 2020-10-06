import { request } from '../../../../../api';
import { limit } from '../../../../../library/limit';
import { model } from '../../../../../modules/app';
import * as feed from '../../../../../modules/feed';
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
