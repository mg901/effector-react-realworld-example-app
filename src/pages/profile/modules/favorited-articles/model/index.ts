import { status } from 'patronum/status';
import { request } from '../../../../../api';
import { limit } from '../../../../../library/limit';
import { model } from '../../../../../modules/app';
import * as feed from '../../../../../modules/feed';
import * as types from '../../../model/types';

export const fetchFeedFx = model.domain.createEffect(
  ({ username, page, pageSize }: types.GetFeedFxArgs) =>
    request
      .get<feed.types.Feed>(
        `articles?favorited=${encodeURIComponent(username)}&${limit(
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
  setUnfavoriteArticleFx,
  useModel,
} = feed.createFeedModel({
  domain: model.domain,
  pageSize: 5,
  status: status({ effect: fetchFeedFx }),
});
