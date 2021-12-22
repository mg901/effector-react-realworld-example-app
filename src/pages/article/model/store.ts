import { createEvent, createEffect, restore, combine, forward } from 'effector';
import { useStore } from 'effector-react';
import * as article from 'entities/article';
import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import { history } from 'shared/library/router';

export const articleDeleted = createEvent<string>();
export const getArticleFx = createEffect<string, article.types.Article>(
  (slug) => {
    return api
      .get<{ article: article.types.Article }>(`articles/${slug}`)
      .then((response) => response.data.article)
      .then(({ createdAt, ...rest }) => ({
        ...rest,
        createdAt: new Date(createdAt).toDateString(),
      }));
  },
);

export const deleteArticleFx = createEffect(async (slug: string) => {
  const result = await api.del<void>(`articles/${slug}`);

  return result;
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
  visitor.$visitor,
  ({ author }, user) => author.username === user.username,
);

forward({
  from: articleDeleted,
  to: deleteArticleFx,
});

deleteArticleFx.done.watch(() => {
  history.push('/');
});

export const selectors = {
  useGetArticlePending: () => useStore(getArticleFx.pending),
  useCanModify: () => useStore($canModify),
  useArticle: () => useStore($article),
};
