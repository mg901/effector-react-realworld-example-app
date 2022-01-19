import * as visitor from '@/entities/visitor';
import { AddCommentForm } from './add-comment';
import { CommentsList } from './comment-list';
import { Error } from './error';

type Props = Readonly<{
  slug: string;
}>;

export const Comments = ({ slug }: Props) => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? (
    <>
      <Error />
      <AddCommentForm slug={slug} />
      <CommentsList slug={slug} />
    </>
  ) : null;
};
