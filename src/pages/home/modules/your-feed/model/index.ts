import { forward, attach } from 'effector';
import { status } from 'patronum/status';
import { request } from '../../../../../api';
import { limit } from '../../../../../library/limit';
import * as feed from '../../../../../modules/feed';
import { root } from '../../../../../root';
import * as types from './types';

export const fetchFeedFx = root.createEffect(
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
  domain: root,
  status: status({ effect: fetchFeedFx }),
});

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [Gate.open, currentPageWasSet],
  to: attach({
    source: {
      pageSize: $pageSize,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
