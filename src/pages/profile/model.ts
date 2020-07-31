import { createEffect } from 'effector';
import { createGate } from 'effector-react';
import { get, post, del } from '../../api';
import { limit } from '../../library';
import { $location } from '../../router';

export const getArticlesByAuthorFx = createEffect({
  handler: ({ author, page }: any) =>
    get(`/articles?author=${encodeURIComponent(author)}&${limit(5, page)}`),
});

export const getFavoriteArticlesByAuthorFx = createEffect({
  handler: ({ author, page }: any) =>
    get(`/articles?favorited=${encodeURIComponent(author)}&${limit(5, page)}`),
});

export const setFavoriteArticleFx = createEffect({
  handler: (slug: string) => post(`/articles/${slug}/favorite`),
});

export const setUnfavoriteArticleFx = createEffect({
  handler: (slug: string) => {
    del(`/articles/${slug}/favorite`);
  },
});

export const getProfileFx = createEffect({
  handler: (username: string) => get(`/profiles/${username}`),
});

export const followUserFx = createEffect({
  handler: (username: string) => post(`/profiles/${username}/follow`),
});

export const unfollowUserFx = createEffect({
  handler: (username: string) => del(`/profiles/${username}/follow`),
});

export const PageGate = createGate();
export const $$author = $location.map((x) => x.pathname.replace(/\/@/, ''));
