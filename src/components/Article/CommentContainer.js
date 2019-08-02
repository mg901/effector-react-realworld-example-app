import { Link } from 'react-router-dom';
import React from 'react';
import CommentInput from './CommentInput';
import { CommentList } from './CommentList';

export const CommentContainer = ({ currentUser, errors, slug, comments }) => {
  if (currentUser) {
    return (
      <div className="col-xs-12 col-md-8 offset-md-2">
        <div>
          <list-errors errors={errors} />
          <CommentInput slug={slug} currentUser={currentUser} />
        </div>

        <CommentList
          comments={comments}
          slug={slug}
          currentUser={currentUser}
        />
      </div>
    );
  }

  return (
    <div className="col-xs-12 col-md-8 offset-md-2">
      <p>
        <Link to="/login">Sign in</Link>
        &nbsp;or&nbsp;
        <Link to="/register">sign up</Link>
        &nbsp;to add comments on this article.
      </p>

      <CommentList comments={comments} slug={slug} currentUser={currentUser} />
    </div>
  );
};
