/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  createEvent,
  createEffect,
  createStore,
  combine,
  split,
  Store,
  Effect,
} from 'effector';
import { useStore } from 'effector-react';
import { persist } from 'effector-storage/query';
import { status } from 'patronum/status';
import * as api from 'shared/api';
import * as types from './types';

type Feed = Readonly<{
  articles: readonly types.Article[];
  articlesCount: number;
}>;

type Options = {
  pageSize?: number;
  effect: Effect<any, Feed, any>;
};

export function createFeed({ pageSize, effect }: Options) {
  const $feed = createStore<Feed>({
    articlesCount: 0,
    articles: [],
  }).on(effect.doneData, (_, payload) => payload);

  const $totalPages = $feed.map((x) => x.articlesCount);
  const $articles = $feed.map((x) => x.articles);
  const $status = status({
    effect,
  });

  const $isEmptyFeed = combine(
    $status,
    $articles,
    (st, articles) => (st === 'done' || st === 'fail') && articles.length === 0,
  );

  const { paginationChanged, $pageSize, $pageIndex, $pageNumber } =
    createPagination(pageSize);

  const { favoriteArticleToggled } = toggleArticleLike($feed);

  const selectors = {
    useLoading: () => useStore(effect.pending),
    useIsEmpty: () => useStore($isEmptyFeed),
    usePageSize: () => useStore($pageSize),
    usePageIndex: () => useStore($pageIndex),
    usePageNumber: () => useStore($pageNumber),
    useTotalPages: () => useStore($totalPages),
  };

  return {
    paginationChanged,
    favoriteArticleToggled,
    $totalPages,
    $articles,
    $isEmptyFeed,
    $pageSize,
    $pageIndex,
    $pageNumber,
    selectors,
  };
}

export function createPagination(pageSize = 10) {
  const paginationChanged = createEvent<number>();

  const $pageSize = createStore<number>(pageSize);
  const $queryPage = createStore('1').on(
    paginationChanged.map(String),
    (_, payload) => payload,
  );
  const $pageNumber = $queryPage.map(Number);

  persist({
    store: $queryPage,
    key: 'page',
  });

  const $pageIndex = $pageNumber.map((x) => x - 1);

  return {
    paginationChanged,
    $pageSize,
    $pageNumber,
    $pageIndex,
  };
}

function toggleArticleLike(feed: Store<Feed>) {
  const favoriteArticleToggled = createEvent<types.Article>();

  type SelectedArticle = Readonly<{
    article: types.Article;
  }>;

  const setFavoriteArticleFx = createEffect<
    types.Article,
    SelectedArticle,
    api.types.ApiError
  >(({ slug }) => {
    return api.post(`articles/${slug}/favorite`).then((x) => x.data);
  });

  const setUnfavoriteArticleFx = createEffect<types.Article, SelectedArticle>(
    ({ slug }) => {
      return api.del(`articles/${slug}/favorite`).then((x) => x.data);
    },
  );

  feed.on(
    [setFavoriteArticleFx.done, setUnfavoriteArticleFx.done],
    (state, { params, result }) => ({
      ...state,
      articles: state.articles.map((article) =>
        article.slug !== params.slug
          ? article
          : {
              ...article,
              favorited: result.article.favorited,
              favoritesCount: result.article.favoritesCount,
            },
      ),
    }),
  );

  split({
    source: favoriteArticleToggled,
    match: {
      favorite: (x) => x.favorited === true,
      unfavorite: (x) => x.favorited === false,
    },
    cases: {
      favorite: setUnfavoriteArticleFx,
      unfavorite: setFavoriteArticleFx,
    },
  });

  return {
    favoriteArticleToggled,
  };
}
