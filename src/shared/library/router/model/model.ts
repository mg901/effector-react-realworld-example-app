import { createDomain, restore } from 'effector-root';
import { history, Location } from '../router';

export const domain = createDomain('router');
export const locationUpdated = domain.createEvent<Location>();
export const $location = restore(locationUpdated, history.location);
export const $pathname = $location.map((x) => x.pathname);
export const $search = $location.map((x) => x.search);

history.listen((location) => {
  locationUpdated(location);
});
