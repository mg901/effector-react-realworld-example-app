import { ButtonProps } from '../button';
import './index.css';

type Props = ButtonProps &
  Readonly<{
    active: boolean;
  }>;

export const PaginationItem: React.FC<Props> = ({
  active,
  onClick,
  children,
}) => (
  <button
    className="pagination-item"
    data-active={active}
    type="button"
    onClick={onClick}>
    <span className="page-link">{children}</span>
  </button>
);
