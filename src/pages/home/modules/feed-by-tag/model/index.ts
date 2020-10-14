import {
  createEvent,
  createEffect,
  createStore,
  combine,
  forward,
  attach,
  guard,
  sample,
} from 'effector-root';
import { status } from 'patronum/status';
import { request } from 'api';
import { limit } from 'library/limit';
import * as router from 'library/router';
import * as feed from 'modules/feed';
import * as types from './types';

export const {
  Gate,
  favoriteToggled,
  $currentPage,
  $currentTag,
  $pageSize,
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
} = feed.createFeedModel();

export const currentPageWasSet = createEvent<number>();

export const fetchFeedFx = createEffect(
  ({ tag, page }: types.FetchFeedByTagArgs) =>
    request
      .get<feed.types.Feed>(
        `articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`,
      )
      .then((x) => x.data),
);

export const $status = status({ effect: fetchFeedFx });
export const $feed = createStore<types.Feed>({}).on(
  fetchFeedFx.done,
  (state, { params, result }) => ({
    ...state,
    [params.tag]: result,
  }),
);

export const $feedByTag = combine(
  $feed,
  $currentTag,
  (feedStore, tag) =>
    feedStore[tag] ?? {
      articles: [],
      articlesCount: 0,
    },
).on(
  [setFavoriteArticleFx.done, setUnfavoriteArticleFx.done],
  (state, { params, result }) => ({
    ...state,
    articles: state.articles.map((article) =>
      article.slug !== params
        ? article
        : {
            ...article,
            favorited: result.article.favorited,
            favoritesCount: result.article.favoritesCount,
          },
    ),
  }),
);

export const $articles = $feedByTag.map((x) => x.articles);
export const $totalPages = $feedByTag.map((x) => x.articlesCount);

export const $isEmptyFeed = combine(
  $status,
  $articles,
  (is, articles) => is === 'done' && articles.length === 0,
);

export const $feedModel = combine({
  total: $totalPages,
  loading: fetchFeedFx.pending,
  isEmptyFeed: $isEmptyFeed,
  currentPage: $currentPage,
  pageSize: $pageSize,
  totalPages: $totalPages,
});

forward({
  from: [Gate.open, currentPageWasSet, guard($currentTag, { filter: Boolean })],
  to: attach({
    source: {
      tag: $currentTag,
      page: $currentPage,
      pageSize: $pageSize,
    },
    effect: fetchFeedFx,
  }),
});

sample({
  source: {
    path: router.model.$pathname,
    tag: $currentTag,
  },
  clock: currentPageWasSet,
  fn: ({ path, tag }, page) => ({ path, page, tag }),
}).watch(({ path, page, tag }) => {
  router.model.history.replace(`${path}?tag=${tag}&page=${page}`);
});
