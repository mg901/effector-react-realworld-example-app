import { createEvent, createStore } from 'effector';
// import * as api from './api';
import * as types from './types';

type Feed = {
  articles: readonly types.Article[];
  articlesCount: number;
};

export function createFeed() {
  // const favoriteArticleToggled = createEvent<types.SelectedArticle>();
  const feedLoaded = createEvent<any>();

  // const favoriteClicked = favoriteArticleToggled.filter({
  //   fn: (payload) => payload.favorited === true,
  // });

  // const unfavoriteClicked = favoriteArticleToggled.filter({
  //   fn: (payload) => payload.favorited === false,
  // });

  // const setFavoriteArticleFx = createEffect<
  //   types.SelectedArticle,
  //   types.ToggleFavoriteArticleResponse
  // >(api.setFavoriteArticle);

  // const setUnfavoriteArticleFx = createEffect(api.setUnfavoriteArticle);

  const $articles = createStore<Feed>({
    articlesCount: 0,
    articles: [],
  }).on(feedLoaded, (_, payload) => payload);
  // .on(favoriteClicked, (state, payload) => ({
  //   ...state,
  //   articles: state.articles.map((article) =>
  //     article.slug !== payload.slug
  //       ? article
  //       : {
  //           ...article,
  //           favorited: !article.favorited,
  //           favoritesCount: article.favoritesCount - 1,
  //         },
  //   ),
  // }))
  // .on(unfavoriteClicked, (state, payload) => ({
  //   ...state,
  //   articles: state.articles.map((article) =>
  //     article.slug !== payload.slug
  //       ? article
  //       : {
  //           ...article,
  //           favorited: !article.favorited,
  //           favoritesCount: article.favoritesCount + 1,
  //         },
  //   ),
  // }))
  // .on(
  //   [setFavoriteArticleFx.done, setUnfavoriteArticleFx.done],
  //   (state, { params, result }) => ({
  //     ...state,
  //     articles: state.articles.map((article) =>
  //       article.slug !== params.slug
  //         ? article
  //         : {
  //             ...article,
  //             favorited: result.article.favorited,
  //             favoritesCount: result.article.favoritesCount,
  //           },
  //     ),
  //   }),
  // )
  // .on(
  //   [setFavoriteArticleFx.fail, setUnfavoriteArticleFx.fail],
  //   (state, { params }) => ({
  //     ...state,
  //     articles: state.articles.map((article) =>
  //       article.slug !== params.slug
  //         ? article
  //         : {
  //             ...article,
  //             favorited: params.favorited,
  //             favoritesCount: params.favoritesCount,
  //           },
  //     ),
  //   }),
  // );

  const $totalPages = $articles.map((articles) => articles.articlesCount);
  const $articlesList = $articles.map((articles) => articles.articles);
  // const $status = status({
  //   effect,
  // });

  // const $isEmptyFeed = combine(
  //   $status,
  //   $articles,
  //   (value, articles) =>
  //     (value === 'done' || value === 'fail') && articles.length === 0,
  // );

  // split({
  //   source: favoriteArticleToggled,
  //   match: {
  //     favorite: (article) => article.favorited === true,
  //     unfavorite: (article) => article.favorited === false,
  //   },
  //   cases: {
  //     favorite: setUnfavoriteArticleFx,
  //     unfavorite: setFavoriteArticleFx,
  //   },
  // });

  return {
    // favoriteArticleToggled,
    feedLoaded,
    // setUnfavoriteArticleFx,
    $articles,
    $totalPages,
    $articlesList,
    // $isEmptyFeed,
  };
}
