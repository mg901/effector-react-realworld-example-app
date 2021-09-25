import { createEffect } from 'effector';

export const getCommentFx = createEffect<
  types.AddCommentFxArgs,
  Comment,
  api.types.ApiError
>(({ slug, body }) => {
  return api
    .post(`articles/${slug}/comments`, { body })
    .then((x) => x.data.comment);
});
