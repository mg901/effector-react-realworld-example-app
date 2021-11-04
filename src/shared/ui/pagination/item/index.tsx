import { ButtonProps } from '../../button';
import './index.css';

type Props = ButtonProps &
  Readonly<{
    onItemClick: (x: number) => void;
    active: boolean;
    item: number;
  }>;

export const Item: React.FC<Props> = ({
  active,
  onItemClick,
  item,
  children,
}) => {
  const onClick = () => onItemClick(item);

  return (
    <button
      className="pagination-item"
      data-active={active}
      type="button"
      onClick={onClick}
    >
      <span className="page-link">{children}</span>
    </button>
  );
};
