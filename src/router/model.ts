import { createEvent, createStore } from 'effector';
import { createBrowserHistory, Location, History } from 'history';

export const historyUpdated = createEvent<any>();

export const history = createBrowserHistory();
export const $location = createStore<Location<History.PoorMansUnknown>>(
  history.location,
);
