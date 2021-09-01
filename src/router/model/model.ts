import { createEvent, restore } from 'effector';
import { history, Location } from '../history';

export const locationUpdated = createEvent<Location>();
export const $location = restore(locationUpdated, history.location);
export const $pathname = $location.map((x) => x.pathname);
export const $search = $location.map((x) => x.search);

history.listen((location) => {
  locationUpdated(location);
});
