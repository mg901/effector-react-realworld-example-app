import {
  createEvent,
  createStore,
  createEffect,
  guard,
  sample,
} from 'effector';
import * as api from 'api';
import * as router from 'library/router';
import * as types from './types';

const defaultOptions = {
  currentPage: 1,
  pageSize: 10,
};

export const createFeedModel = (
  options: types.Options = defaultOptions,
): types.CreateFeedModel => {
  const settings = { ...defaultOptions, ...options };

  // events
  const currentPageSettled = createEvent<number>();
  const favoriteToggled = createEvent<types.Article>();

  // effects
  const setFavoriteArticleFx = createEffect((slug: string) =>
    api.post<types.FavoriteArticle>(`/articles/${slug}/favorite`),
  );

  const setUnfavoriteArticleFx = createEffect((slug: string) =>
    api.del<types.UnfavoriteArticle>(`/articles/${slug}/favorite`),
  );

  // stores
  const $feed = createStore<types.Feed>({
    articles: [],
    articlesCount: 0,
  });

  const $currentPage = router.model.$search.map((x) => {
    const page = new URLSearchParams(x).get('page') ?? settings.currentPage;

    return Number(page);
  });

  // reducer
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

  sample({
    source: {
      path: router.model.$pathname,
      page: $currentPage,
    },
    clock: currentPageSettled,
  }).watch(({ path, page }) => {
    router.model.history.replace(`${path}?page=${page}`);
  });

  // set favorite / unfavorite article
  guard(favoriteToggled, {
    filter: (x) => x.favorited === true,
  }).watch(({ slug }) => setUnfavoriteArticleFx(slug));

  guard(favoriteToggled, {
    filter: (x) => x.favorited === false,
  }).watch(({ slug }) => setFavoriteArticleFx(slug));

  // if the user is not logged in
  setFavoriteArticleFx.failData.watch((error) => {
    if (error.status === 401) {
      router.model.history.push(router.Paths.LOGIN);
    }
  });

  return {
    currentPageSettled,
    favoriteToggled,
    setFavoriteArticleFx,
    setUnfavoriteArticleFx,
    $pageSize: createStore<number>(settings.pageSize),
    $currentPage,
    $currentTag: router.model.$search.map(
      (x) => new URLSearchParams(x).get('tag') ?? '',
    ),
    $feed,
    $articles: $feed.map((x) => x.articles),
    $totalPages: $feed.map((x) => x.articlesCount),
  };
};
