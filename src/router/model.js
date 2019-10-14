import { createEvent, restore, combine } from 'effector';
import { history } from './history';
import { GLOBAL_FEED, USER_FEED, FEED_BY_TAG } from './constants';
import { authDone } from '../auth';
import { $token } from '../auth/model';
import { selectTag } from '../tags/model';

const historyUpdate = createEvent();

export const $location = restore(historyUpdate, history.location);

history.listen((location, action) => {
  historyUpdate({ location, action });
});

export const $target = combine($token, (token) =>
  token ? USER_FEED : GLOBAL_FEED,
);

$token.watch((token) =>
  token ? history.push(USER_FEED) : history.push(GLOBAL_FEED),
);

authDone.watch(() => {
  history.push(USER_FEED);
});

selectTag.watch((tag) => {
  history.push(`${FEED_BY_TAG}${tag}`);
});
