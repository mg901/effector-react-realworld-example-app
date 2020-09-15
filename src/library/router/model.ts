import { createEvent, createStore } from 'effector';
import { createBrowserHistory, Location } from 'history';

export const history = createBrowserHistory();

export const locationUpdated = createEvent<Location>();

history.listen((location) => {
  locationUpdated(location);
});

export const $location = createStore<Location>(history.location);
export const $search = $location.map((x) => x.search);
