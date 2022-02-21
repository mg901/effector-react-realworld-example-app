import { Button, ButtonProps } from '@/shared/ui';
import * as session from '@/entities/session';
import { types } from '../../model';
import styles from './index.module.css';

type Props = Readonly<{
  onClick: ButtonProps['onClick'];
  author: types.CommentType['author'];
}>;

export const ButtonDelete = ({ author, onClick }: Props) => {
  const { username } = session.selectors.useSession();
  const isAuth = session.selectors.useIsAuthorized();
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
