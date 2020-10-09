import React from 'react';
import { useList } from 'effector-react';
import { List } from 'ui';
import { $comments } from '../model';
import { Comment } from './comment';

export const CommentsList: React.FC = () => (
  <List>
    {useList($comments, (comment) => (
      <Comment comment={comment} />
    ))}
  </List>
);
