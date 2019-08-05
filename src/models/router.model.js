import { createEvent, restore } from 'effector';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const historyUpdate = createEvent();

export const $location = restore(historyUpdate, history.location);

history.listen((location, action) => {
  historyUpdate({ location, action });
});
