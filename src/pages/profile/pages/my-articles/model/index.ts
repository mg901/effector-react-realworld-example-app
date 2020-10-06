import { status } from 'patronum/status';
import { request } from '../../../../../api';
import { model } from '../../../../../app';
import * as feed from '../../../../../features/feed';
import { limit } from '../../../../../library/limit';
import * as types from '../../../model/types';

export const fetchFeedFx = model.domain.createEffect(
  ({ username, page, pageSize }: types.GetFeedFxArgs) =>
    request
      .get<feed.types.Feed>(
        `articles?author=${encodeURIComponent(username)}&${limit(
          pageSize,
          page,
        )}`,
      )
      .then((x) => x.data),
);

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
} = feed.createFeedModel({
  domain: model.domain,
  pageSize: 5,
  status: status({ effect: fetchFeedFx }),
});
