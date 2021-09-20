/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  createEvent,
  createEffect,
  createStore,
  combine,
  restore,
  Store,
  Effect,
} from 'effector';
import { persist } from 'effector-storage/query';
import { status } from 'patronum/status';
import { types } from 'entities/article';
import * as api from 'shared/api';

type Feed = Readonly<{
  articles: readonly types.Article[];
  articlesCount: number;
}>;

type Options = {
  pageSize?: number;
  effect: Effect<any, any, any>;
};

export function createFeed({ pageSize, effect }: Options) {
  const $feed = createStore<Feed>({
    articlesCount: 0,
    articles: [],
  });

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

  return {
    $totalPages,
    $articles,
    $isEmptyFeed,
    ...createPagination(pageSize),
    ...toggleLike($feed),
  };
}

export function createPagination(pageSize = 10) {
  const paginationChanged = createEvent<number>();

  const $pageSize = createStore<number>(pageSize);
  const $pageCount = restore(paginationChanged, 1);

  persist({
    store: $pageCount,
    key: 'page',
  });

  const $currentPage = $pageCount.map((x) => x - 1);

  return {
    paginationChanged,
    $pageSize,
    $pageNumber: $pageCount,
    $currentPage,
  };
}

function toggleLike(feed: Store<Feed>) {
  const favoriteToggled = createEvent<types.Article>();

  type SelectedArticle = Readonly<{
    article: types.Article;
  }>;

  const setFavoriteArticleFx = createEffect<
    string,
    SelectedArticle,
    api.types.ApiError
  >((slug) => {
    return api.post(`articles/${slug}/favorite`).then((x) => x.data);
  });

  const setUnfavoriteArticleFx = createEffect<string, SelectedArticle>(
    (slug) => {
      return api.del(`articles/${slug}/favorite`).then((x) => x.data);
    },
  );

  feed.on(
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

  return {
    favoriteToggled,
  };
}
