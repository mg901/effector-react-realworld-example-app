import { createEffect } from 'effector';
import { post, del } from '../../api';

export const setFavoriteArticleFx = createEffect({
  handler: (slug: string) => post(`/articles/${slug}/favorite`),
});

export const setUnfavoriteArticleFx = createEffect({
  handler: (slug: string) => {
    del(`/articles/${slug}/favorite`);
  },
});
