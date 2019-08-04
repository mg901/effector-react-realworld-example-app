import { createEvent, restore } from 'effector';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const historyUpdate = createEvent();

export const $location = restore(historyUpdate, history.location);

history.listen((location, action) => {
  historyUpdate({ location, action });
});
