import * as user from 'entities/user';
import { AddCommentForm } from './add-comment';
import { CommentsList } from './comment-list';
import { Error } from './error';

export const Comments: React.FC = () => {
  const isAuth = user.selectors.useIsAuth();

  return (
    <>
      {isAuth ? (
        <>
          <Error />
          <AddCommentForm />
          <CommentsList />
        </>
      ) : null}
    </>
  );
};
