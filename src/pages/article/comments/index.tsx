import { useGate } from 'effector-react';
import { AuthCosumer } from 'router';
import { Gate as ArticleGate } from '../model';
import { Gate as CommentsGate } from './model';
import { AddComment, CommentsList, Errors } from './ui';

type Props = Readonly<{
  slug: string;
}>;

export const Comments: React.FC<Props> = ({ slug }) => {
  useGate(ArticleGate, { slug });
  useGate(CommentsGate, { slug });

  return (
    <AuthCosumer>
      {({ isAuth }) =>
        isAuth ? (
          <>
            <Errors />
            <AddComment />
            <CommentsList />
          </>
        ) : null
      }
    </AuthCosumer>
  );
};
