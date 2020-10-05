import React from 'react';
import { useList } from 'effector-react';
import { List } from '../../../ui';
import { model } from '../model';
import { Comment } from './comment';

export const CommentsList: React.FC = () => (
  <List>
    {useList(model.$comments, (comment) => (
      <Comment comment={comment} />
    ))}
  </List>
);
