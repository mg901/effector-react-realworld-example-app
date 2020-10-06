import { forward, attach } from 'effector';
import {
  Gate,
  $feed,
  $currentPage,
  $pageSize,
  fetchFeedFx,
  currentPageWasSet,
  setUnfavoriteArticleFx,
} from '.';
import * as model from '../../../model';

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [Gate.open, currentPageWasSet, setUnfavoriteArticleFx.done],
  to: attach({
    source: {
      pageSize: $pageSize,
      username: model.$username,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
