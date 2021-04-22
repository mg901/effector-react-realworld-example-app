import { useGate } from 'effector-react';
import { AuthCosumer } from 'router';
import { Gate } from '../model';
import { AddComment } from './ui/add-comment';
import { CommentsList } from './ui/comment-list';
import { Errors } from './ui/errors';

type Props = Readonly<{
  slug: string;
}>;

export const Comments: React.FC<Props> = ({ slug }) => {
  useGate(Gate, { slug });

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
