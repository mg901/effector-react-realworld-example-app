import { history, $location, locationUpdated } from './model';

history.listen((location) => {
  locationUpdated(location);
});

$location.on(locationUpdated, (_, payload) => payload);
