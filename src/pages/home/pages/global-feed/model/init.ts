import { forward } from 'effector';
import { $globalFeed, getGlobalFeedFx, PageGate, $currentPage } from './model';

$globalFeed.on(getGlobalFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, $currentPage],
  to: getGlobalFeedFx,
});
