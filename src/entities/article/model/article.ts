/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  createEvent,
  createEffect,
  createStore,
  combine,
  split,
  Effect,
} from 'effector';
import { status } from 'patronum/status';
import * as api from 'shared/api';
import * as types from './types';

type Feed = {
  articles: readonly types.Article[];
  articlesCount: number;
};

type Options = {
  effect: Effect<any, Feed, any>;
};

export function createFeed({ effect }: Options) {
  const favoriteArticleToggled = createEvent<types.Article>();

  const favoriteClicked = favoriteArticleToggled.filter({
    fn: (article) => article.favorited === true,
  });

  const unfavoriteClicked = favoriteArticleToggled.filter({
    fn: (article) => article.favorited === false,
  });

  type SelectedArticle = {
    article: types.Article;
  };

  const setFavoriteArticleFx = createEffect<
    types.Article,
    SelectedArticle,
    api.types.ApiError
  >(({ slug }) => {
    return api
      .post<SelectedArticle>(`articles/${slug}/favorite`)
      .then((response) => response.data);
  });

  const setUnfavoriteArticleFx = createEffect(({ slug }: types.Article) => {
    return api
      .del<SelectedArticle>(`articles/${slug}/favorite`)
      .then((response) => response.data);
  });

  const $feed = createStore<Feed>({
    articlesCount: 0,
    articles: [],
  })
    .on(effect.doneData, (_, payload) => payload)
    .on(favoriteClicked, (state, payload) => ({
      ...state,
      articles: state.articles.map((article) =>
        article.slug !== payload.slug
          ? article
          : {
              ...article,
              favorited: !article.favorited,
              favoritesCount: article.favoritesCount - 1,
            },
      ),
    }))
    .on(unfavoriteClicked, (state, payload) => ({
      ...state,
      articles: state.articles.map((article) =>
        article.slug !== payload.slug
          ? article
          : {
              ...article,
              favorited: !article.favorited,
              favoritesCount: article.favoritesCount + 1,
            },
      ),
    }))
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
    )
    .on(
      [setFavoriteArticleFx.fail, setUnfavoriteArticleFx.fail],
      (state, { params }) => ({
        ...state,
        articles: state.articles.map((article) =>
          article.slug !== params.slug
            ? article
            : {
                ...article,
                favorited: params.favorited,
                favoritesCount: params.favoritesCount,
              },
        ),
      }),
    );

  const $totalPages = $feed.map((feed) => feed.articlesCount);
  const $articles = $feed.map((articles) => articles.articles);
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
      favorite: (article) => article.favorited === true,
      unfavorite: (article) => article.favorited === false,
    },
    cases: {
      favorite: setUnfavoriteArticleFx,
      unfavorite: setFavoriteArticleFx,
    },
  });

  return {
    favoriteArticleToggled,
    setUnfavoriteArticleFx,
    $feed,
    $totalPages,
    $articles,
    $isEmptyFeed,
  };
}
