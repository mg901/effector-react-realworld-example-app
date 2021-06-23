import { createEffect, createEvent, guard, Store } from 'effector-root';
import { AxiosError } from 'axios';
import * as article from 'entities/article';
import * as feed from 'entities/feed';
import { api } from 'shared/api';
import * as router from 'shared/library/router';

type Done = { article: article.types.Article };
type Fail = AxiosError;

export const createToggleLike = (store: Store<feed.types.Feed>) => {
  const favoriteToggled = createEvent<article.types.Article>();

  const setFavoriteArticleFx = createEffect<string, Done, Fail>((slug) => {
    return api.post(`articles/${slug}/favorite`).then(({ data }) => data);
  });

  const setUnfavoriteArticleFx = createEffect<string, Done, Fail>((slug) => {
    return api.delete(`articles/${slug}/favorite`).then(({ data }) => data);
  });

  store.on(
    [setFavoriteArticleFx.done, setUnfavoriteArticleFx.done],
    (state, { params, result }) => ({
      ...state,
      articles: state.articles.map((a) =>
        a.slug !== params
          ? a
          : {
              ...a,
              favorited: result.article.favorited,
              favoritesCount: result.article.favoritesCount,
            },
      ),
    }),
  );

  guard({
    source: favoriteToggled,
    filter: ({ favorited }) => favorited === true,
    target: setUnfavoriteArticleFx.prepend<article.types.Article>(
      ({ slug }) => slug,
    ),
  });

  guard({
    source: favoriteToggled,
    filter: ({ favorited }) => favorited === false,
    target: setFavoriteArticleFx.prepend<article.types.Article>(
      ({ slug }) => slug,
    ),
  });

  guard({
    source: setFavoriteArticleFx.failData,
    filter: (error) => error.response?.status === 401,
  }).watch(() => {
    router.history.push(router.URLS.LOGIN);
  });

  return {
    favoriteToggled,
  };
};
