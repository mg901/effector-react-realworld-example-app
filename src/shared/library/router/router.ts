import { createBrowserHistory } from 'history';

export type { Location } from 'history';

export const history = createBrowserHistory({
  basename: '/effector-react-realworld-example-app',
});

export enum URLS {
  ROOT = '/',
  HOME = '/home',
  YOUR_FEED = '/your-feed',
  GLOBAL_FEED = '/global-feed',
  FEED_BY_TAG = '/feed-by-tag',
  LOGIN = '/login',
  REGISTRATION = '/registration',
  SETTINGS = '/settings',
  EDITOR = '/editor',
  EDITOR_SLUG = '/editor/:slug',
  PROFILE = '/@:username',
  ARTICLE_SLUG = '/article/:slug',
}
