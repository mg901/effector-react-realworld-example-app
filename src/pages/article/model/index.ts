import { createEvent, createEffect, createStore, combine } from 'effector';
import { createGate } from 'effector-react';
import { request } from '../../../api';
import { Article } from '../../../features/types';
import { $user } from '../../../features/user';
import { GateState } from './types';

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
  Promise.all([fetchArticleFx(slug)]),
);

export const Gate = createGate<GateState>();

export const $slug = Gate.state.map((x) => x.id);
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
  $user,
  ({ author }, user) => author.username === user.username,
);
