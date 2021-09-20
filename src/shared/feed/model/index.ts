// import {
//   createEvent,
//   createStore,
//   createEffect,
//   guard,
//   sample,
//   combine,
// } from 'effector';
// import { createGate, useStore } from 'effector-react';
// import { EffectState } from 'patronum/status';
// import * as api from 'shared/api';
// import * as router from 'shared/library/router';
// import * as types from './types';

// const defaultOptions = {
//   currentPage: 1,
//   pageSize: 10,
//   status: createStore<EffectState>('initial'),
// };

// export const createFeedModel = (
//   options: types.Options = defaultOptions,
// ): types.CreateFeedModel => {
//   const opts = {
//     ...defaultOptions,
//     ...options,
//   };

//   // events
//   const currentPageWasSet = createEvent<number>();
//   const favoriteToggled = createEvent<types.Article>();

//   // effects
//   const setFavoriteArticleFx = createEffect<
//     string,
//     types.FavoriteArticle,
//     api.types.ApiError
//   >((slug) => {
//     return api.post(`articles/${slug}/favorite`).then((x) => x.data);
//   });

//   const setUnfavoriteArticleFx = createEffect<string, types.UnfavoriteArticle>(
//     (slug) => {
//       return api.del(`articles/${slug}/favorite`).then((x) => x.data);
//     },
//   );

//   // stores
//   const $pageSize = createStore<number>(opts.pageSize);
//   const $currentTag = router.model.$locationSearch.map(
//     (search) => new URLSearchParams(search).get('tag') ?? '',
//   );

//   const $currentPage = router.model.$locationSearch.map((search) => {
//     const page = new URLSearchParams(search).get('page') ?? opts.currentPage;

//     return Number(page) - 1;
//   });

//   // reducer
//   const $feed = createStore<types.Feed>({
//     articles: [],
//     articlesCount: 0,
//   }).on(
//     [setFavoriteArticleFx.done, setUnfavoriteArticleFx.done],
//     (state, { params, result }) => ({
//       ...state,
//       articles: state.articles.map((article) =>
//         article.slug !== params
//           ? article
//           : {
//               ...article,
//               favorited: result.article.favorited,
//               favoritesCount: result.article.favoritesCount,
//             },
//       ),
//     }),
//   );

//   const $articles = $feed.map((x) => x.articles);
//   const $totalPages = $feed.map((x) => x.articlesCount);
//   const $status = opts.status;

//   const $isEmptyFeed = combine(
//     $status,
//     $articles,
//     (status, articles) =>
//       (status === 'done' || status === 'fail') && articles.length === 0,
//   );

//   sample({
//     source: router.model.$LocationPathname,
//     clock: currentPageWasSet,
//     fn: (path, page) => ({ path, page }),
//   }).watch(({ path, page }) => {
//     router.history.replace(`${path}?page=${page}`);
//   });

//   guard({
//     source: favoriteToggled,
//     filter: ({ favorited }) => favorited === true,
//     target: setUnfavoriteArticleFx.prepend<types.Article>(({ slug }) => slug),
//   });

//   guard({
//     source: favoriteToggled,
//     filter: ({ favorited }) => favorited === false,
//     target: setFavoriteArticleFx.prepend<types.Article>(({ slug }) => slug),
//   });

//   const $model = combine({
//     pageSize: $pageSize,
//     currentPage: $currentPage,
//     currentTag: $currentTag,
//     totalPages: $totalPages,
//     isEmptyFeed: $isEmptyFeed,
//   });

//   return {
//     Gate: createGate(),
//     currentPageWasSet,
//     favoriteToggled,
//     setFavoriteArticleFx,
//     setUnfavoriteArticleFx,
//     $feed,
//     $articles,
//     $pageSize,
//     $currentPage,
//     $currentTag,
//     $totalPages,
//     $isEmptyFeed,
//     useModel: () => useStore($model),
//   };
// };
