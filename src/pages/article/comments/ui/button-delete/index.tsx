import * as user from 'entities/user';
import { Button, ButtonProps } from 'shared/ui';
import * as types from '../../model/types';
import './index.css';

type Props = Readonly<{
  onClick: ButtonProps['onClick'];
  author: types.Comment['author'];
}>;

export const ButtonDelete: React.FC<Props> = ({ author, onClick }) => {
  const { username } = user.selectors.useUser();
  const isAuth = user.selectors.useIsAuth();
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
