import { memo } from 'react';
import { ButtonProps } from '../../button';
import './index.css';

type Props = ButtonProps &
  Readonly<{
    onItemClick: (x: number) => void;
    active: boolean;
    item: number;
  }>;

export const Item = memo(({ active, onItemClick, item, children }: Props) => {
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
});
