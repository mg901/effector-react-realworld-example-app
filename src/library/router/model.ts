import { createEvent, restore } from 'effector-root';
import { createBrowserHistory, Location } from 'history';

export const history = createBrowserHistory({
  basename: '/effector-react-realworld-example-app',
});

export const locationUpdated = createEvent<Location>();
export const $location = restore(locationUpdated, history.location);
export const $pathname = $location.map((x) => x.pathname);
export const $search = $location.map((x) => x.search);

history.listen((location) => {
  locationUpdated(location);
});
