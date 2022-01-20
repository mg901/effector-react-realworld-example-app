import {
  createEvent,
  createEffect,
  restore,
  combine,
  forward,
  guard,
} from 'effector';
import { useStore, createGate } from 'effector-react';
import * as comment from '@/entities/comment';
import * as visitor from '@/entities/visitor';
import { addCommentFx } from '@/features/add-comment';
import { deleteCommentFx } from '@/features/delete-comment';
import { history, $locationPathname, matchPath, ROUTES } from '@/shared/router';

import * as api from './api';

export const articleDeleted = createEvent<string>();
export const getArticleFx = createEffect(api.getArticle);
export const deleteArticleFx = createEffect(api.deleteArticle);

export const Gate = createGate();

export const $slug = $locationPathname.map((pathname) => {
  const match = matchPath<{ slug: string }>(pathname, {
    path: ROUTES.currentArticle,
  });

  return match ? match.params.slug : '';
});

guard({
  source: $slug,
  filter: Boolean,
  clock: Gate.open,
  target: [getArticleFx, comment.getCommentsFx],
});

export const $comments = restore(comment.getCommentsFx.doneData, [])
  .on(addCommentFx.doneData, (state, payload) => [payload].concat(state))
  .on(deleteCommentFx.done, (state, { params }) =>
    state.filter(({ id }) => id !== params.id),
  );

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
  history.push(ROUTES.yourFeed);
});

export const selectors = {
  useSlug: () => useStore($slug),
  useGetArticlePending: () => useStore(getArticleFx.pending),
  useCanModify: () => useStore($canModify),
  useArticle: () => useStore($article),
};
