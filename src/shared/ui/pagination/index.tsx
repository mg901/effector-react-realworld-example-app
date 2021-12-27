import { useCallback, useMemo, memo } from 'react';
import { Item } from './item';

export type PaginationProps = Readonly<{
  total: number;
  pageSize: number;
  current: number;
  onPageChange: (x: number) => void;
}>;

export const Pagination = memo((props: PaginationProps) => {
  const { show, items, handleClick } = usePagination(props);

  return show ? (
    <nav>
      <ul className="pagination">
        {items.map((item) => {
          return (
            <li className="page-item" key={item}>
              <Item
                active={checkIsActive(item, props.current)}
                item={item}
                key={item}
                onItemClick={handleClick}
              >
                {item}
              </Item>
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null;
});

function usePagination({ total, pageSize, onPageChange }: PaginationProps) {
  const items = useMemo(() => createArray(total, pageSize), [total, pageSize]);
  const show = total > pageSize;

  const handleClick = useCallback(
    (item: number) => {
      onPageChange(item);
    },
    [onPageChange],
  );

  return { items, show, handleClick };
}

function createArray(total: number, pageSize: number): number[] {
  return Array.from({ length: Math.ceil(total / pageSize) }, (_, x) => x + 1);
}

function checkIsActive(item: number, current: number): boolean {
  return item === current;
}
