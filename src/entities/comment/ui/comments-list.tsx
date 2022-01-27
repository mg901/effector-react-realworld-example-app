import { List } from '@/shared/ui';
import * as model from '../model';
import { Comment } from './comment';

type Props = {
  comments: model.types.CommentType[];
};

export const CommentsList = ({ comments }: Props) => {
  return (
    <List>
      {comments.map((comment) => {
        return (
          <Comment
            author={comment.author}
            body={comment.body}
            createdAt={comment.createdAt}
            id={comment.id}
            key={comment.id}
          />
        );
      })}
    </List>
  );
};
