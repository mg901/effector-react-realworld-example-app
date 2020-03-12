import { createEvent } from 'effector';
import { Location, History, Action } from 'history';
import { history } from './history';

type HistoryUpdate = Readonly<{
  location: Location<History.PoorMansUnknown>;
  action: Action;
}>;

const historyUpdate = createEvent<HistoryUpdate>();

history.listen((location, action) => {
  historyUpdate({ location, action });
});
