import { createEvent, createEffect, restore, combine, forward } from 'effector';
import * as article from 'entities/article';
import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import { history } from 'shared/library/router';

export const articleDeleted = createEvent<string>();
export const getArticleFx = createEffect<string, article.types.Article>(
  (slug) => {
    return api
      .get<{ article: article.types.Article }>(`articles/${slug}`)
      .then((x) => x.data.article)
      .then(({ createdAt, ...rest }) => ({
        ...rest,
        createdAt: new Date(createdAt).toDateString(),
      }));
  },
);

export const deleteArticleFx = createEffect((slug: string) => {
  return api.del<void>(`articles/${slug}`);
});

export const $article = restore(getArticleFx.doneData, {
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
  visitor.model.$visitor,
  ({ author }, user) => author.username === user.username,
);

forward({
  from: articleDeleted,
  to: deleteArticleFx,
});

deleteArticleFx.done.watch(() => {
  history.push('/');
});
