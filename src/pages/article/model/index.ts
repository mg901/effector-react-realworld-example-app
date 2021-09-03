import { createDomain, restore, combine, sample } from 'effector';
import { createGate } from 'effector-react';
import * as article from 'entities/article';
import * as user from 'entities/user';
import * as api from 'shared/api';
import { history } from 'shared/library/router';
import { GateState } from './types';

const domain = createDomain('article-page');

export const articleDeleted = domain.createEvent<React.MouseEvent>();
export const fetchArticleFx = domain.createEffect<
  string,
  article.types.Article
>((slug) => {
  return api
    .get<{ article: article.types.Article }>(`articles/${slug}`)
    .then(({ data }) => data.article)
    .then(({ createdAt, ...rest }) => ({
      ...rest,
      createdAt: new Date(createdAt).toDateString(),
    }));
});

export const deleteArticleFx = domain.createEffect((slug: string) => {
  return api.remove<void>(`articles/${slug}`);
});

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
  ({ author }, authUser) => author?.username === authUser.username,
);

sample({
  source: $slug,
  clock: Gate.open,
  target: fetchArticleFx,
});

sample({
  source: $slug,
  clock: articleDeleted,
  target: deleteArticleFx,
});

deleteArticleFx.done.watch(() => {
  history.push('/');
});
