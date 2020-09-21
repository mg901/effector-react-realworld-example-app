import { createEffect } from 'effector';
import * as api from 'api';

export const setFavoriteArticleFx = createEffect((slug: string) =>
  api.post(`/articles/${slug}/favorite`),
);

export const setUnfavoriteArticleFx = createEffect((slug: string) => {
  api.del(`/articles/${slug}/favorite`);
});
