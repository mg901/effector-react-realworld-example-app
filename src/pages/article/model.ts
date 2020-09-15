import { createEffect } from 'effector';
import { post, del } from '../../api';

export const setFavoriteArticleFx = createEffect((slug: string) =>
  post(`/articles/${slug}/favorite`),
);

export const setUnfavoriteArticleFx = createEffect((slug: string) => {
  del(`/articles/${slug}/favorite`);
});
