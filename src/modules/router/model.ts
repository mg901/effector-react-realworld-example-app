import { createEvent, restore } from 'effector';
import { Location, History, Action, createBrowserHistory } from 'history';

type HistoryUpdate = Readonly<{
  location: Location<History.PoorMansUnknown>;
  action: Action;
}>;

export const history = createBrowserHistory();

const historyUpdate = createEvent<any>();
export const $location = restore<any>(historyUpdate, history.location);

history.listen((location, action) => {
  historyUpdate({ location, action });
});
