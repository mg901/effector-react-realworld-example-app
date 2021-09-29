/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  createEvent,
  createEffect,
  createStore,
  combine,
  split,
  Effect,
} from 'effector';
import { useStore } from 'effector-react';
import { status } from 'patronum/status';
import * as api from 'shared/api';
import * as types from './types';

type Feed = Readonly<{
  articles: readonly types.Article[];
  articlesCount: number;
}>;

type Options = {
  effect: Effect<any, Feed, any>;
};

export function createFeed({ effect }: Options) {
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

  const $feed = createStore<Feed>({
    articlesCount: 0,
    articles: [],
  })
    .on(effect.doneData, (_, payload) => payload)
    .on(
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

  const $totalPages = $feed.map((x) => x.articlesCount);
  const $articles = $feed.map((x) => x.articles);
  const $status = status({
    effect,
  });

  const $isEmptyFeed = combine(
    $status,
    $articles,
    (value, articles) =>
      (value === 'done' || value === 'fail') && articles.length === 0,
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

  const selectors = {
    useLoading: () => useStore(effect.pending),
    useIsEmpty: () => useStore($isEmptyFeed),
  };

  return {
    favoriteArticleToggled,
    setUnfavoriteArticleFx,
    $feed,
    $totalPages,
    $articles,
    $isEmptyFeed,
    selectors,
  };
}
