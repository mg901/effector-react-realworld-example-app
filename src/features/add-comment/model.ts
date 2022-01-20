import { createEffect } from 'effector';
import * as comment from '@/entities/comment';

import * as http from '@/shared/http';

type AddCommentArgs = Readonly<{
  slug: string;
  body: string;
}>;

const addComment = ({ slug, body }: AddCommentArgs) => {
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

export const addCommentFx = createEffect<
  AddCommentArgs,
  comment.types.CommentType,
  Record<string, unknown>
>(addComment);
