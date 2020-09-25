import React from 'react';
import { Link } from 'react-router-dom';
import * as types from '../model/types';
import '../model/init';

type Props = Readonly<{
  comment: types.Comment;
}>;

export const Comment: React.FC<Props> = ({
  comment: { body, author, createdAt },
}) => (
  <div className="card">
    <div className="card-block">
      <p className="card-text">{body}</p>
    </div>
    <div className="card-footer">
      <Link to={`/@${author.username}`} className="comment-author">
        <img
          src={author.image}
          className="comment-author-img"
          alt={author.username}
        />
      </Link>
      &nbsp;
      <Link to={`/@${author.username}`} className="comment-author">
        {author.username}
      </Link>
      <span className="date-posted">{new Date(createdAt).toDateString()}</span>
    </div>
  </div>
);
