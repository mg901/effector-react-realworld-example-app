export enum ROUTES {
  ROOT = '/',
  YOUR_FEED = '/your-feed',
  GLOBAL_FEED = '/global-feed',
  FEED_BY_TAG = '/feed-by-tag',
  LOGIN = '/login',
  REGISTRATION = '/registration',
  SETTINGS = '/settings',
  EDITOR = '/editor',
  EDITOR_SLUG = '/editor/:slug',
  PROFILE = '/@:username',
  PROFILE_FAVORITES = '/@:username/favorites',
  ARTICLE_SLUG = '/article/:slug',
}
