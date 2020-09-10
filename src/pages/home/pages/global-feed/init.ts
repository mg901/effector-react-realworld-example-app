import { forward } from 'effector';

import { PageGate, $globalFeed, getGlobalFeedFx, $currentPage } from './model';

forward({
  from: PageGate.open,
  to: getGlobalFeedFx,
});

forward({
  from: $currentPage.updates,
  to: getGlobalFeedFx,
});

$globalFeed.on(getGlobalFeedFx.doneData, (_, payload) => payload);
