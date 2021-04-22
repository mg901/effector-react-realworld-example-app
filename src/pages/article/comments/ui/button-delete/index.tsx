import { useStore } from 'effector-react';
import * as user from 'shared/user';
import { AuthCosumer } from 'router';
import { Button, ButtonProps } from 'ui';
import * as types from '../../model/types';
import './index.css';

type Props = Readonly<{
  onClick: ButtonProps['onClick'];
  author: types.Comment['author'];
}>;

export const ButtonDelete: React.FC<Props> = ({ author, onClick }) => {
  const { username } = useStore(user.model.$user);
  const isSelf = username === author.username;

  return (
    <AuthCosumer>
      {({ isAuth }) => {
        if (isAuth && isSelf) {
          return (
            <Button className="mod-options btn-delete" onClick={onClick}>
              <i className="ion-trash-a" />
            </Button>
          );
        }

        return null;
      }}
    </AuthCosumer>
  );
};
