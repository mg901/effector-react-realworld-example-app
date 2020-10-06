import { combine } from 'effector';
import { createGate } from 'effector-react';
import { request } from '../../../api';
import { model } from '../../../modules/app';
import { types } from '../../../modules/feed';
import { GateState } from './types';

export const articleDeleted = model.domain.createEvent<React.MouseEvent>();
export const fetchArticleFx = model.domain.createEffect((slug: string) =>
  request
    .get<{ article: types.Article }>(`articles/${slug}`)
    .then((x) => x.data.article)
    .then(({ createdAt, ...article }) => ({
      ...article,
      createdAt: new Date(createdAt).toDateString(),
    })),
);

export const deleteArticleFx = model.domain.createEffect((slug: string) =>
  request.delete<void>(`articles/${slug}`),
);

export const fetchPageDataFx = model.domain.createEffect((slug: string) =>
  Promise.all([fetchArticleFx(slug)]),
);

export const Gate = createGate<GateState>();

export const $slug = Gate.state.map((x) => x.id);
export const $article = model.domain.createStore<types.Article>({
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
  model.$user,
  ({ author }, user) => author.username === user.username,
);
