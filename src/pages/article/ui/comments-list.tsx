import { useList } from 'effector-react';
import { Comment } from '@/entities/comment';
import { List } from '@/shared/ui';
import * as model from '../model';

export const CommentsList = () => {
  return (
    <List>
      {useList(model.$comments, {
        getKey: (comment) => comment.id,
        fn: (comment) => (
          <Comment
            author={comment.author}
            body={comment.body}
            createdAt={comment.createdAt}
            id={comment.id}
          />
        ),
      })}
    </List>
  );
};
