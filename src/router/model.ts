import { createEvent, restore } from 'effector';
import { createBrowserHistory, Location, History } from 'history';

export enum Paths {
  ROOT = '/',
  HOME = '/home',
  YOUR_FEED = '/home/your-feed',
  GLOBAL_FEED = '/home/global-feed',
  FEED_BY_TAG = '/home/feed-by-tag',
  LOGIN = '/login',
  REGISTRATION = '/registration',
  SETTINGS = '/settings',
  EDITOR = '/editor',
  PROFILE = '/@:username',
}

export const history = createBrowserHistory();

export const historyUpdated = createEvent<any>();

history.listen((location) => {
  historyUpdated(location);
});

export const $location = restore<Location<History.PoorMansUnknown>>(
  historyUpdated,
  history.location,
);
