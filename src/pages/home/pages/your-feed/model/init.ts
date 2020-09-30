import { forward, attach } from 'effector';
import {
  PageGate,
  $feed,
  $pageSize,
  $currentPage,
  currentPageWasSet,
  fetchFeedFx,
} from './model';

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, currentPageWasSet],
  to: attach({
    source: {
      pageSize: $pageSize,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
