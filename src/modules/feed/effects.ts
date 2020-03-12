// import { createEffect } from 'effector';
// import { get } from '../../api';
// import { limit } from '../../lib';

// type PostsByAuthor = {
//   author: string;
//   page: number;
// };

// export const fxFetchFavoritePostsByAuthor = createEffect<
//   PostsByAuthor,
//   Feed,
//   Error
// >({
//   handler: ({ author, page }) =>
//     get<Feed>(
//       `/articles?favorited=${encodeURIComponent(author)}&${limit(5, page)}`,
//     ),
// });

// export const fxFetchPostsByAuthorByAuthor = createEffect<
//   PostsByAuthor,
//   Feed,
//   Error
// >({
//   handler: ({ author, page }) =>
//     get<Feed>(
//       `/articles?author=${encodeURIComponent(author)}&${limit(5, page)}`,
//     ),
// });
// export const fxFetchGlobalFeed = createEffect<number | undefined, Feed, Error>({
//   handler: (page?: number) => get<Feed>(`/articles?${limit(10, page)}`),
// });

// export const fxFetchUserFeed = createEffect<undefined, Feed, Error>({
//   handler: () => get<Feed>('/articles/feed?limit=10&offset=0'),
// });
