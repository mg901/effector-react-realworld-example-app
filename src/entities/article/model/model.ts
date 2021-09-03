import { createDomain, sample, guard } from 'effector';
import * as api from 'shared/api';
import * as router from 'shared/library/router';
import * as types from './types';

export const domain = createDomain('article');

const currentPageWasSet = domain.createEvent<number>();
const favoriteToggled = domain.createEvent<types.Article>();

const setFavoriteArticleFx = domain.createEffect<
  string,
  types.SelectedArticle,
  api.types.ApiError
>((slug) => {
  return api.post(`articles/${slug}/favorite`).then((x) => x.data);
});

const setUnfavoriteArticleFx = domain.createEffect<
  string,
  types.SelectedArticle
>(async (slug) => {
  return api.remove(`articles/${slug}/favorite`).then((x) => x.data);
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
  target: setUnfavoriteArticleFx.prepend<types.Article>((x) => x?.slug),
});

guard({
  source: favoriteToggled,
  filter: ({ favorited }) => favorited === false,
  target: setFavoriteArticleFx.prepend<types.Article>((x) => x?.slug),
});
