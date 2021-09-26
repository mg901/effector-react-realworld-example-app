import * as user from 'entities/user';
import { ErrorList } from 'widgets/error-list';
import { AddCommentForm } from './add-comment';
import { CommentsList } from './comment-list';

export const Comments: React.FC = () => {
  const isAuth = user.selectors.useIsAuth();

  return (
    <>
      {isAuth ? (
        <>
          <ErrorList />
          <AddCommentForm />
          <CommentsList />
        </>
      ) : null}
    </>
  );
};
