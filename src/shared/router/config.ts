const PROFILE = '/@:username';
const EDITOR = '/editor';

export const ROUTES = {
  root: '/',
  login: '/login',
  registration: '/registration',
  article: '/article/:slug',
  profile: {
    root: PROFILE,
    favorites: `${PROFILE}/favorites`,
  },
  globalFeed: '/global-feed',
  feedByTag: '/feed-by-tag',
  settings: '/settings',
  editor: {
    root: EDITOR,
    slug: `${EDITOR}/:slug`,
  },
} as const;
