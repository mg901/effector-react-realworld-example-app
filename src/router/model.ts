import { createEvent, restore } from 'effector';
import { createBrowserHistory, Location, History } from 'history';

export const historyUpdated = createEvent<any>();

export const history = createBrowserHistory();
export const $location = restore<Location<History.PoorMansUnknown>>(
  historyUpdated,
  history.location,
);

history.listen((location) => {
  historyUpdated(location);
});
