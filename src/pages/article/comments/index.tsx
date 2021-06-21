import { useGate } from 'effector-react';
import * as user from 'shared/entities/user';
import * as article from '../model';
import * as comments from './model';
import { AddComment, CommentsList, Errors } from './ui';

type Props = Readonly<{
  slug: string;
}>;

export const Comments: React.FC<Props> = ({ slug }) => {
  useGate(article.model.Gate, { slug });
  useGate(comments.model.Gate, { slug });
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
