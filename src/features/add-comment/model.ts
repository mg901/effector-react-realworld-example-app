import { createEvent, createEffect, forward } from 'effector';
import * as comment from '@/entities/comment';
import * as http from '@/shared/http';

export type AddCommentArgs = Readonly<{
  slug: string;
  body: string;
}>;

export const addComment = ({ slug, body }: AddCommentArgs) => {
  return http
    .request<{ comment: comment.types.CommentType }>({
      url: `articles/${slug}/comments`,
      method: 'post',
      data: {
        comment: { body },
      },
    })
    .then((response) => response.comment);
};

export const commentAdded = createEvent<AddCommentArgs>();

export const addCommentFx = createEffect<
  AddCommentArgs,
  comment.types.CommentType,
  Record<string, unknown>
>(addComment);

forward({
  from: commentAdded,
  to: addCommentFx,
});
