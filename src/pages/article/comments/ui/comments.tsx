import * as visitor from 'entities/visitor';
import { AddCommentForm } from './add-comment';
import { CommentsList } from './comment-list';
import { Error } from './error';

export const Comments: React.FC = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return !isAuth ? null : (
    <>
      <Error />
      <AddCommentForm />
      <CommentsList />
    </>
  );
};
