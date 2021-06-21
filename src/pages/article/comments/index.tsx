import { useGate } from 'effector-react';
import * as user from 'shared/entities/user';
import * as article from '../model';
import { Gate as CommentsGate } from './model';
import { AddComment, CommentsList, Errors } from './ui';

type Props = Readonly<{
  slug: string;
}>;

export const Comments: React.FC<Props> = ({ slug }) => {
  useGate(article.model.Gate, { slug });
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
