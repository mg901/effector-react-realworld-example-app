import { forward, attach } from 'effector';
import * as profile from '../../../model';
import { $feed, $currentPage, getFeedFx, PageGate } from './model';

$feed.on(getFeedFx.doneData, (_, payload) => payload);

forward({
  from: PageGate.open,
  to: attach({
    source: { username: profile.model.$username, page: $currentPage },
    effect: getFeedFx,
  }),
});
