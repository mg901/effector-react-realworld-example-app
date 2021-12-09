import { createEvent, restore } from 'effector';
import { history, Location } from '../router';

export const locationUpdated = createEvent<Location>();
export const $location = restore(locationUpdated, history.location);
export const $locationPathname = $location.map((location) => location.pathname);
export const $locationSearch = $location.map((location) => location.search);

history.listen((location) => {
  locationUpdated(location);
});
