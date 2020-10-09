import { forward, attach, sample, guard } from 'effector';
import {
  Gate,
  $feed,
  $feedByTag,
  $currentTag,
  $currentPage,
  $pageSize,
  currentPageWasSet,
  fetchFeedFx,
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
} from '.';
import * as router from '../../../../../library/router';

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
    tag: $currentTag,
  },
  clock: currentPageWasSet,
  fn: ({ path, tag }, page) => ({ path, page, tag }),
}).watch(({ path, page, tag }) => {
  router.model.history.replace(`${path}?tag=${tag}&page=${page}`);
});
