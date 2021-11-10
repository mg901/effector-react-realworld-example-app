import * as visitor from 'entities/visitor';
import { Button, ButtonProps } from 'shared/ui';
import { types } from '../../model';
import './index.css';

type Props = Readonly<{
  onClick: ButtonProps['onClick'];
  author: types.Comment['author'];
}>;

export const ButtonDelete: React.FC<Props> = ({ author, onClick }) => {
  const { username } = visitor.selectors.useVisitor();
  const isAuth = visitor.selectors.useIsAuth();
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
