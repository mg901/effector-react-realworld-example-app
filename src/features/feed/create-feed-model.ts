import { createEvent, createStore, createEffect, guard } from 'effector';
import * as api from 'api';
import * as router from 'library/router';
import * as types from './types';

export const setFavoriteArticleFx = createEffect((slug: string) =>
  api.post<types.FavoriteArticle>(`/articles/${slug}/favorite`),
);

export const setUnfavoriteArticleFx = createEffect((slug: string) =>
  api.del<types.UnfavoriteArticle>(`/articles/${slug}/favorite`),
);

const defaultOptions = {
  currentPage: 1,
};

export const createFeedModel = (
  options: types.Options = defaultOptions,
): types.CreateFeedModel => {
  const favoriteToggled = createEvent<types.Article>();

  const $feed = createStore<types.Feed>({
    articles: [],
    articlesCount: 0,
  });

  $feed.on(
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

  guard(favoriteToggled, {
    filter: (x) => x.favorited === true,
  }).watch(({ slug }) => setUnfavoriteArticleFx(slug));

  guard(favoriteToggled, {
    filter: (x) => x.favorited === false,
  }).watch(({ slug }) => setFavoriteArticleFx(slug));

  return {
    currentPageSettled: createEvent<number>(),
    favoriteToggled,
    setFavoriteArticleFx,
    setUnfavoriteArticleFx,
    $currentPage: router.model.$search.map((x) => {
      const page = new URLSearchParams(x).get('page') ?? options.currentPage;

      return Number(page);
    }),

    $currentTag: router.model.$search.map(
      (x) => new URLSearchParams(x).get('tag') ?? '',
    ),
    $feed,
    $articles: $feed.map((x) => x.articles),
    $isEmptyArticles: $feed.map((x) => x.articles.length === 0),
    $totalPages: $feed.map((x) => x.articlesCount),
  };
};
