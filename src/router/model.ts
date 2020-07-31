import { createEvent, restore } from 'effector';
import { createBrowserHistory, Location, History } from 'history';

export const history = createBrowserHistory();

export const historyUpdated = createEvent<any>();

history.listen((location) => {
  historyUpdated(location);
});

export const $location = restore<Location<History.PoorMansUnknown>>(
  historyUpdated,
  history.location,
);
