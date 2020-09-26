import React from 'react';
import { Link } from 'react-router-dom';
import { AuthBranch } from 'library/router';
import { CommentsList } from './comment-list';
import { Errors } from './errors';
import { Form } from './form';
import '../model/init';

export const Comments: React.FC = () => (
  <div className="col-xs-12 col-md-8 offset-md-2">
    <AuthBranch check="auth">
      <Errors />
      <Form />
    </AuthBranch>
    <AuthBranch check="anon">
      <p>
        <Link to="/login">Sign in</Link>
        &nbsp;or&nbsp;
        <Link to="/register">sign up</Link>
        &nbsp;to add comments on this article.
      </p>
    </AuthBranch>

    <CommentsList />
  </div>
);
