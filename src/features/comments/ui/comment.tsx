import React from 'react';
import { types } from '../model';
import { CommentFooter } from './comment-footer';

import '../model/init';

type Props = Readonly<{
  comment: types.Comment;
}>;

export const Comment: React.FC<Props> = ({ comment }) => (
  <div className="card">
    <div className="card-block">
      <p className="card-text">{comment.body}</p>
    </div>
    <CommentFooter {...comment} />
  </div>
);
