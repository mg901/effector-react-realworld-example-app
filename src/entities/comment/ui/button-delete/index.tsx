import * as visitor from '@/entities/visitor';
import { Button, ButtonProps } from '@/shared/ui';
import { types } from '../../model';
import styles from './index.module.css';

type Props = Readonly<{
  onClick: ButtonProps['onClick'];
  author: types.CommentType['author'];
}>;

export const ButtonDelete = ({ author, onClick }: Props) => {
  const { username } = visitor.selectors.useVisitor();
  const isAuth = visitor.selectors.useIsAuthorized();
  const isSelf = username === author.username;

  if (isAuth && isSelf) {
    return (
      <Button className={`${styles.delete} mod-options`} onClick={onClick}>
        <i className="ion-trash-a" />
      </Button>
    );
  }

  return null;
};
