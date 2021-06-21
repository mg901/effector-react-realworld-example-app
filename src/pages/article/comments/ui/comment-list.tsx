import { useList } from 'effector-react';
import { List } from 'shared/ui';
import * as comments from '../model';
import { Comment } from './comment';

export const CommentsList: React.FC = () => (
  <List>
    {useList(comments.model.$comments, {
      getKey: (item) => item.id,
      fn: (item) => <Comment comment={item} />,
    })}
  </List>
);
