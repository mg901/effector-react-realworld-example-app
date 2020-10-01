import { forward, attach } from 'effector';
import * as profile from '../../model';
import {
  PageGate,
  $feed,
  $currentPage,
  $pageSize,
  fetchFeedFx,
  currentPageWasSet,
  setUnfavoriteArticleFx,
} from './model';

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, currentPageWasSet, setUnfavoriteArticleFx.done],
  to: attach({
    source: {
      pageSize: $pageSize,
      username: profile.model.$username,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
