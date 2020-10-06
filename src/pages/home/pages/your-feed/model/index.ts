import { status } from 'patronum/status';
import { request } from '../../../../../api';
import { model } from '../../../../../app';
import * as feed from '../../../../../features/feed';
import { limit } from '../../../../../library/limit';
import * as types from './types';

export const fetchFeedFx = model.domain.createEffect(
  ({ pageSize, page }: types.fetchFeedFxArgs) =>
    request
      .get<feed.types.Feed>(`articles/feed?${limit(pageSize, page)}`)
      .then((x) => x.data),
);

export const {
  Gate,
  currentPageWasSet,
  favoriteToggled,
  $currentPage,
  $feed,
  $articles,
  $pageSize,
  useModel,
} = feed.createFeedModel({
  domain: model.domain,
  status: status({ effect: fetchFeedFx }),
});
