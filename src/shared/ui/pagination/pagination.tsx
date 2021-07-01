import { useMemo } from 'react';
import { Item } from './item';

type Props = Readonly<{
  total: number;
  pageSize: number;
  current: number;
  onItemClick: (x: number) => number;
}>;

export const Pagination: React.FC<Props> = ({
  total,
  pageSize,
  current,
  onItemClick,
}) => {
  const pages = useMemo(() => createArray(total, pageSize), [total, pageSize]);
  const show = total > pageSize;

  return !show ? null : (
    <nav>
      <ul className="pagination">
        {pages.map((item) => {
          return (
            <li className="page-item" key={item}>
              <Item
                active={checkIsActive(item, current)}
                key={item}
                onClick={() => onItemClick(item)}>
                {item}
              </Item>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

function createArray(total: number, pageSize: number): number[] {
  return Array.from({ length: Math.ceil(total / pageSize) }, (_, x) => x + 1);
}

function checkIsActive(item: number, current: number): boolean {
  return item === current + 1;
}
