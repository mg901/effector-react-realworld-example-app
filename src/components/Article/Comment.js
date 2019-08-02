import { Link } from 'react-router-dom';
import React from 'react';
import DeleteButton from './DeleteButton';

export const Comment = ({
  currentUser,
  comment: { author, body, createdAt, id },
  slug,
}) => {
  const show = currentUser && currentUser.username === author.username;

  return (
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
        <span className="date-posted">
          {new Date(createdAt).toDateString()}
        </span>
        <DeleteButton show={show} slug={slug} commentId={id} />
      </div>
    </div>
  );
};
