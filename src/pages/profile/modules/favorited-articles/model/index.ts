import { status } from 'patronum/status';
import { request } from '../../../../../api';
import { limit } from '../../../../../library/limit';
import * as feed from '../../../../../modules/feed';
import { root } from '../../../../../root';
import * as types from '../../../model/types';

export const fetchFeedFx = root.createEffect(
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
  domain: root,
  pageSize: 5,
  status: status({ effect: fetchFeedFx }),
});
