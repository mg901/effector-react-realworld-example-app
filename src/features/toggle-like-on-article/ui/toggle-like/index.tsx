import { Button, ButtonProps } from 'shared/ui';
import './index.css';

type Props = ButtonProps &
  Readonly<{
    active: boolean;
  }>;

export const ToggleLike: React.FC<Props> = ({ active, onClick, children }) => (
  <Button
    className="btn btn-sm btn-outline-primary"
    data-active={active}
    onClick={onClick}>
    <i className="ion-heart" /> {children}
  </Button>
);
