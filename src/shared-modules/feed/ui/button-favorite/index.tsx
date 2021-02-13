import { Button, ButtonProps } from 'ui';
import './index.css';

type Props = ButtonProps &
  Readonly<{
    active: boolean;
  }>;

export const ButtonFavorite: React.FC<Props> = ({
  active,
  onClick,
  children,
}) => (
  <Button
    className="btn btn-sm btn-outline-primary"
    data-active={active}
    onClick={onClick}>
    <i className="ion-heart" /> {children}
  </Button>
);
