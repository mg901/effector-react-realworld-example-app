import React from 'react';
import { Link } from 'react-router-dom';
import { useGate } from 'effector-react';
import { AuthBranch } from '../../../library/router';
import { Gate } from './model';
import { CommentsList } from './ui/comment-list';
import { Errors } from './ui/errors';
import { Form } from './ui/form';

type Props = Readonly<{
  slug: string;
}>;

export const Comments: React.FC<Props> = ({ slug }) => {
  useGate(Gate, { slug });

  return (
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
};
