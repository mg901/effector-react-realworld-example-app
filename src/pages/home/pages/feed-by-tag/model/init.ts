import { forward, attach, sample } from 'effector';
import * as router from 'library/router';
import {
  PageGate,
  $feed,
  $feedByTag,
  $currentTag,
  $currentPage,
  $pageSize,
  fetchFeedFx,
  currentPageSettled,
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
} from './model';

forward({
  from: [PageGate.open, router.model.$search],
  to: attach({
    source: {
      tag: $currentTag,
      page: $currentPage,
      pageSize: $pageSize,
    },
    effect: fetchFeedFx,
  }),
});

$feed.on(fetchFeedFx.done, (state, { params, result }) => ({
  ...state,
  [params.tag]: result,
}));

$feedByTag.on(
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

sample({
  source: {
    path: router.model.$pathname,
    page: $currentPage,
    tag: $currentTag,
  },
  clock: currentPageSettled,
}).watch(({ path, page, tag }) => {
  router.model.history.replace(`${path}?tag=${tag}&page=${page}`);
});
