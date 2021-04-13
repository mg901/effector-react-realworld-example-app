import {
  createEvent,
  createEffect,
  restore,
  combine,
  forward,
  attach,
} from 'effector-root';
import { createGate } from 'effector-react';
import { api } from 'api';
import * as router from 'router';
import { types } from 'shared/feed';
import * as user from 'shared/user';
import { GateState } from './types';

export const articleDeleted = createEvent<React.MouseEvent>();
export const fetchArticleFx = createEffect<string, types.Article>((slug) =>
  api
    .get<{ article: types.Article }>(`articles/${slug}`)
    .then(({ data }) => data.article)
    .then(({ createdAt, ...article }) => ({
      ...article,
      createdAt: new Date(createdAt).toDateString(),
    })),
);

export const deleteArticleFx = createEffect((slug: string) =>
  api.delete<void>(`articles/${slug}`),
);

export const Gate = createGate<GateState>();
export const $slug = Gate.state.map((props) => props.slug);

export const $article = restore(fetchArticleFx.doneData, {
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
  user.model.$user,
  ({ author }, authUser) => author.username === authUser.username,
);

forward({
  from: Gate.open,
  to: attach({
    source: $slug,
    effect: fetchArticleFx,
  }),
});

forward({
  from: articleDeleted,
  to: attach({
    source: $slug,
    effect: deleteArticleFx,
  }),
});

deleteArticleFx.done.watch(() => {
  router.model.history.push('/');
});
