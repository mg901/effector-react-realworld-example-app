import { Button, ButtonProps } from 'shared/ui';
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
    className="btn-outline-primary"
    data-active={active}
    size="sm"
    onClick={onClick}
  >
    <i className="ion-heart" /> {children}
  </Button>
);
