import * as visitor from '@/entities/visitor';
import * as model from '../model';
import { AddCommentForm } from './add-comment-form';
import { CommentsList } from './comments-list';
import { MessageForUnauthorized } from './message-for-unauthorized';

type Props = Readonly<{
  slug: string;
  comments: model.types.CommentType[];
}>;

export const Comments = ({ slug, comments }: Props) => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return (
    <>
      <MessageForUnauthorized isAuth={isAuth} />
      {isAuth && <AddCommentForm slug={slug} />}
      <CommentsList comments={comments} />
    </>
  );
};
