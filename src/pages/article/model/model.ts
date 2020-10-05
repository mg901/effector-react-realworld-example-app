import { createEvent, createEffect, createStore, combine } from 'effector';
import { createGate } from 'effector-react';
import { request } from '../../../api';
import * as comments from '../../../features/comments';
import { Article } from '../../../features/types';
import * as authUser from '../../../features/user';
import * as router from '../../../library/router';

export const articleDeleted = createEvent<React.MouseEvent>();
export const fetchArticleFx = createEffect((slug: string) =>
  request
    .get<{ article: Article }>(`articles/${slug}`)
    .then((x) => x.data.article)
    .then(({ createdAt, ...article }) => ({
      ...article,
      createdAt: new Date(createdAt).toDateString(),
    })),
);

export const deleteArticleFx = createEffect((slug: string) =>
  request.delete<void>(`articles/${slug}`),
);

export const fetchPageDataFx = createEffect((slug: string) =>
  Promise.all([fetchArticleFx(slug), comments.model.fetchCommentsFx(slug)]),
);

export const PageGate = createGate();
export const $slug = router.model.$pathname.map((x) =>
  x.replace(/^\/article(\/)?/, ''),
);

export const $article = createStore<Article>({
  title: '',
  slug: '',
  body: '',
  createdAt: '',
  updatedAt: '',
  tagList: [],
  description: '',
  author: {
    username: '',
    bio: '',
    image: '',
    following: false,
  },
  favorited: false,
  favoritesCount: 0,
});

export const $canModify = combine(
  $article,
  authUser.model.$user,
  ({ author }, user) => author.username === user.username,
);
