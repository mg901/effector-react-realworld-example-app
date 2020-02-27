import { createEvent, restore } from 'effector';
import { history } from './history';

const historyUpdate = createEvent();

export const $location = restore(historyUpdate, history.location);

history.listen((location, action) => {
  historyUpdate({ location, action });
});
