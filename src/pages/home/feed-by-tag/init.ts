import { forward } from 'effector';
import * as router from '../../../library/router';
import { $feed, getFeedFx, PageGate, getFeedByTagFx } from './model';

forward({
  from: [PageGate.open, router.model.$search.updates],
  to: getFeedByTagFx,
});

$feed.on(getFeedFx.done, (state, { params, result }) => ({
  ...state,
  [params.tag]: result,
}));
