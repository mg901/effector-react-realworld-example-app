import { createDomain, sample, guard } from 'effector';
import * as api from 'shared/api';
import * as router from 'shared/library/router';
import * as types from './types';

export const domain = createDomain('article');

export const currentPageWasSet = domain.createEvent<number>();
export const favoriteToggled = domain.createEvent<types.Article>();

const setFavoriteArticleFx = domain.createEffect<
  string,
  { article: types.Article }
>((slug) => {
  return api.post(`articles/${slug}/favorite`).then((x) => x.data);
});

const setUnfavoriteArticleFx = domain.createEffect<
  string,
  { article: types.Article }
>(async (slug) => {
  return api.remove(`articles/${slug}/favorite`).then((x) => x.data);
});

export const $currentTag = router.model.$search.map(
  (search) => new URLSearchParams(search).get('tag') ?? '',
);

export const $currentPage = router.model.$search.map((search) => {
  const page = new URLSearchParams(search).get('page') ?? 1;

  return Number(page) - 1;
});

export const $feed = domain
  .createStore<types.Feed>({
    articles: [],
    articlesCount: 0,
  })
  .on(
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

export const $articles = $feed.map((x) => x.articles);
export const $totalPages = $feed.map((x) => x.articlesCount);

sample({
  source: router.model.$pathname,
  clock: currentPageWasSet,
  fn: (path, page) => ({ path, page }),
}).watch(({ path, page }) => {
  router.history.replace(`${path}?page=${page}`);
});

guard({
  source: favoriteToggled,
  filter: ({ favorited }) => favorited === true,
  target: setUnfavoriteArticleFx.prepend<types.Article>((x) => x.slug),
});

guard({
  source: favoriteToggled,
  filter: ({ favorited }) => favorited === false,
  target: setFavoriteArticleFx.prepend<types.Article>((x) => x.slug),
});
