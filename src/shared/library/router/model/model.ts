import { createEvent, restore } from 'effector';
import { history, Location } from '../router';

export const locationUpdated = createEvent<Location>();
export const $location = restore(locationUpdated, history.location);
export const $LocationPathname = $location.map((x) => x.pathname);
export const $locationSearch = $location.map((x) => x.search);

history.listen((location) => {
  locationUpdated(location);
});
