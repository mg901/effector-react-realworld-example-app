import {
  createEvent,
  createEffect,
  createStore,
  combine,
  forward,
  attach,
} from 'effector-root';
import { createGate } from 'effector-react';
import { request } from 'api';
import * as router from 'library/router';
import { types } from 'modules/feed';
import * as user from 'modules/user';
import { GateState } from './types';

export const articleDeleted = createEvent<React.MouseEvent>();
export const fetchArticleFx = createEffect<string, types.Article>((slug) =>
  request
    .get<{ article: types.Article }>(`articles/${slug}`)
    .then(({ data }) => data.article)
    .then(({ createdAt, ...article }) => ({
      ...article,
      createdAt: new Date(createdAt).toDateString(),
    })),
);

export const deleteArticleFx = createEffect((slug: string) =>
  request.delete<void>(`articles/${slug}`),
);

export const Gate = createGate<GateState>();

export const $slug = Gate.state.map((props) => props.slug);

export const $article = createStore<types.Article>({
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
}).on(fetchArticleFx.doneData, (_, payload) => payload);

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
