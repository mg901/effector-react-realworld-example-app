import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { AuthBranch } from 'library/router';
import * as user from 'modules/user';
import { commentDeleted } from '../model';
import * as types from '../model/types';
import { ButtonDelete } from './button-delete';

type Props = types.Comment;

export const CommentFooter: React.FC<Props> = ({ author, createdAt, id }) => {
  const { username } = useStore(user.model.$user);
  const isAuthUser = username === author.username;

  return (
    <div className="card-footer">
      <Link className="comment-author" to={`/@${author.username}`}>
        <img
          alt={author.username}
          className="comment-author-img"
          src={author.image}
        />
      </Link>
      &nbsp;
      <Link className="comment-author" to={`/@${author.username}`}>
        {author.username}
      </Link>
      <span className="date-posted">{new Date(createdAt).toDateString()}</span>
      <AuthBranch check="auth">
        {isAuthUser && <ButtonDelete onClick={() => commentDeleted(id)} />}
      </AuthBranch>
    </div>
  );
};
