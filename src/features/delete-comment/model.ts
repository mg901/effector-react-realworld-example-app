import { createEvent, createEffect, forward } from 'effector';
import * as http from '@/shared/http';

export type DeleteCommentArgs = Readonly<{
  slug: string;
  id: string;
}>;

export const commentDeleted = createEvent<DeleteCommentArgs>();

export const deleteComment = ({ slug, id }: DeleteCommentArgs) => {
  http.request({
    url: `articles/${slug}/comments/${id}`,
    method: 'delete',
  });
};

export const deleteCommentFx = createEffect<
  DeleteCommentArgs,
  void,
  Record<string, unknown>
>(deleteComment);

forward({
  from: commentDeleted,
  to: deleteCommentFx,
});
