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

export const changeUrlFx = createEffect(
  ({ path, page }: types.ChangeUrlFxArgs) => {
    router.model.history.replace(`${path}?page=${page}`);
  },
);

const defaultOptions = {
  currentPage: 1,
  pageSize: 10,
};

export const createFeedModel = (
  options: types.Options = defaultOptions,
): types.CreateFeedModel => {
  const settings = { ...defaultOptions, ...options };
  const currentPageSettled = createEvent<number>();
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
    currentPageSettled,
    favoriteToggled,
    setFavoriteArticleFx,
    setUnfavoriteArticleFx,
    $pageSize: createStore<number>(settings.pageSize ?? 10),
    $currentPage: router.model.$search.map((x) => {
      const page = new URLSearchParams(x).get('page') ?? settings.currentPage;

      return Number(page);
    }),

    $currentTag: router.model.$search.map(
      (x) => new URLSearchParams(x).get('tag') ?? '',
    ),
    $feed,
    $articles: $feed.map((x) => x.articles),
    $totalPages: $feed.map((x) => x.articlesCount),
  };
};
