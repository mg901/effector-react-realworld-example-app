import { createEffect } from 'effector';
import { post, del } from '../request';

export const createComment = createEffect().use((slug, comment) =>
  post(`/articles/${slug}/comments`, { comment }),
);

export const deleteComment = createEffect().use((slug, id) =>
  del(`/articles/${slug}/comments/${id}`),
);
