import { useGate } from 'effector-react';
import * as user from 'entities/user';
import { Gate as ArticleGate } from '../model';
import { Gate as CommentsGate } from './model';
import { AddComment } from './ui/add-comment';
import { CommentsList } from './ui/comment-list';
import { Errors } from './ui/errors';

type Props = Readonly<{
  slug: string;
}>;

export const Comments: React.FC<Props> = ({ slug }) => {
  useGate(ArticleGate, { slug });
  useGate(CommentsGate, { slug });
  const isAuth = user.selectors.useIsAuth();

  return (
    <>
      {isAuth ? (
        <>
          <Errors />
          <AddComment />
          <CommentsList />
        </>
      ) : null}
    </>
  );
};
