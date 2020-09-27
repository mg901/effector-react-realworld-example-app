import { forward, attach } from 'effector';
import { PageGate, $feed, $currentPage, getFeedFx } from './model';

$feed.on(getFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, $currentPage],
  to: attach({
    source: $currentPage,
    effect: getFeedFx,
  }),
});
