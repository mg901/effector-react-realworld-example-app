import { createEffect } from 'effector';
import { post, del } from '../request';

export const createCommentReq = createEffect().use((slug, comment) =>
  post(`/articles/${slug}/comments`, { comment }),
);

export const deleteCommentReq = createEffect().use((slug, id) =>
  del(`/articles/${slug}/comments/${id}`),
);
