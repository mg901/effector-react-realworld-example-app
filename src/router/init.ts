import { createEvent } from 'effector';
import { history, $location } from './state';

const historyUpdate = createEvent<any>();
$location.on(historyUpdate, (_, payload) => payload);

history.listen((location, action) => {
  historyUpdate({ location, action });
});
