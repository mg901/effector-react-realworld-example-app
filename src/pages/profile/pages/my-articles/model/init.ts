import { forward, attach } from 'effector';
import * as profile from '../../../model';
import {
  PageGate,
  $feed,
  $currentPage,
  $pageSize,
  currentPageWasSet,
  fetchFeedFx,
} from './model';

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, currentPageWasSet],
  to: attach({
    source: {
      pageSize: $pageSize,
      username: profile.model.$username,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
