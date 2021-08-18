import { createDomain, restore } from 'effector-root';
import { history, Location } from '../history';

export const router = createDomain('router');
export const locationUpdated = router.createEvent<Location>();
export const $location = restore(locationUpdated, history.location);
export const $pathname = $location.map((x) => x.pathname);
export const $search = $location.map((x) => x.search);

history.listen((location) => {
  locationUpdated(location);
});
