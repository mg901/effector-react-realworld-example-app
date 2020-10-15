import {
  createEvent,
  createStore,
  createEffect,
  guard,
  sample,
  combine,
} from 'effector-root';
import { createGate, useStore } from 'effector-react';
import { AxiosError } from 'axios';
import { EffectState } from 'patronum/status';
import { request } from 'api';
import * as router from 'library/router';
import * as types from './types';

const defaultOptions = {
  currentPage: 1,
  pageSize: 10,
  status: createStore<EffectState>('initial'),
};

export const createFeedModel = (
  options: types.Options = defaultOptions,
): types.CreateFeedModel => {
  const opts = {
    ...defaultOptions,
    ...options,
  };

  // events
  const currentPageWasSet = createEvent<number>();
  const favoriteToggled = createEvent<types.Article>();

  // effects
  const setFavoriteArticleFx = createEffect<
    string,
    types.FavoriteArticle,
    AxiosError
  >((slug) =>
    request.post(`articles/${slug}/favorite`).then((response) => response.data),
  );

  const setUnfavoriteArticleFx = createEffect((slug: string) =>
    request
      .delete<types.UnfavoriteArticle>(`articles/${slug}/favorite`)
      .then((response) => response.data),
  );

  // stores
  const $pageSize = createStore<number>(opts.pageSize);
  const $currentTag = router.model.$search.map(
    (search) => new URLSearchParams(search).get('tag') ?? '',
  );

  const $currentPage = router.model.$search.map((search) => {
    const page = new URLSearchParams(search).get('page') ?? opts.currentPage;

    return Number(page);
  });

  // reducer
  const $feed = createStore<types.Feed>({
    articles: [],
    articlesCount: 0,
  }).on(
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

  const $articles = $feed.map(({ articles }) => articles);
  const $totalPages = $feed.map(({ articlesCount }) => articlesCount);
  const $status = opts.status;

  const $isEmptyFeed = combine(
    $status,
    $articles,
    (is, articles) => is === 'done' && articles.length === 0,
  );

  sample({
    source: router.model.$pathname,
    clock: currentPageWasSet,
    fn: (path, page) => ({ path, page }),
  }).watch(({ path, page }) => {
    router.model.history.replace(`${path}?page=${page}`);
  });

  // set favorite / unfavorite article
  guard(favoriteToggled, {
    filter: ({ favorited }) => favorited === true,
  }).watch(({ slug }) => setUnfavoriteArticleFx(slug));

  guard(favoriteToggled, {
    filter: ({ favorited }) => favorited === false,
  }).watch(({ slug }) => setFavoriteArticleFx(slug));

  // if the user is not logged in
  setFavoriteArticleFx.failData.watch((error) => {
    if (error.response?.status === 401) {
      router.model.history.push(router.Paths.LOGIN);
    }
  });

  return {
    Gate: createGate(),
    currentPageWasSet,
    favoriteToggled,
    setFavoriteArticleFx,
    setUnfavoriteArticleFx,
    $feed,
    $articles,
    $pageSize,
    $currentPage,
    $currentTag,
    $totalPages,
    $isEmptyFeed,
    useModel: () =>
      useStore(
        combine({
          pageSize: $pageSize,
          currentPage: $currentPage,
          currentTag: $currentTag,
          totalPages: $totalPages,
          isEmptyFeed: $isEmptyFeed,
        }),
      ),
  };
};
