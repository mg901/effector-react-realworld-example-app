import * as comment from '@/entities/comment';
import * as visitor from '@/entities/visitor';
import { Button, ButtonProps } from '@/shared/ui';

import './index.css';

type Props = Readonly<{
  onClick: ButtonProps['onClick'];
  author: comment.types.CommentType['author'];
}>;

export const ButtonDelete = ({ author, onClick }: Props) => {
  const username = visitor.selectors.useUsername();
  const isAuth = visitor.selectors.useIsAuthorized();
  const isSelf = username === author.username;

  if (isAuth && isSelf) {
    return (
      <Button className="mod-options btn-delete" onClick={onClick}>
        <i className="ion-trash-a" />
      </Button>
    );
  }

  return null;
};
