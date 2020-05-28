import { createStore } from 'effector';
import { createBrowserHistory, Location, History } from 'history';

export const history = createBrowserHistory();
export const $location = createStore<Location<History.PoorMansUnknown>>(
  history.location,
);
