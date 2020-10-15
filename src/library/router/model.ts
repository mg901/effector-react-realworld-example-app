import { createEvent, createStore } from 'effector-root';
import { createBrowserHistory, Location } from 'history';

export const history = createBrowserHistory({
  basename: '/effector-react-realworld-example-app',
});

export const locationUpdated = createEvent<Location>();
export const $location = createStore<Location>(history.location).on(
  locationUpdated,
  (_, payload) => payload,
);
export const $pathname = $location.map(({ pathname }) => pathname);
export const $search = $location.map(({ search }) => search);

history.listen((location) => {
  locationUpdated(location);
});
