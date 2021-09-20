import { useGate } from 'effector-react';
import * as user from 'entities/user';
import { ErrorList } from 'widgets/error-list';
import { Gate as ArticleGate } from '../model';
import * as comments from './model';
import { AddComment } from './ui/add-comment';
import { CommentsList } from './ui/comment-list';

type Props = Readonly<{
  slug: string;
}>;

export const Comments: React.FC<Props> = ({ slug }) => {
  useGate(ArticleGate, { slug });
  useGate(comments.model.Gate, { slug });
  const isAuth = user.selectors.useIsAuth();

  return (
    <>
      {isAuth ? (
        <>
          <ErrorList />
          <AddComment />
          <CommentsList />
        </>
      ) : null}
    </>
  );
};
