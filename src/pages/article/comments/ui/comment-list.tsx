import { useList } from 'effector-react';
import { List } from 'ui';
import { $comments } from '../model';
import { Comment } from './comment';

export const CommentsList: React.FC = () => (
  <List>
    {useList($comments, {
      getKey: (item) => item.id,
      fn: (item) => <Comment comment={item} />,
    })}
  </List>
);
