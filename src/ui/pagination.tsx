import React, { useMemo } from 'react';
import { PatinationItem } from './pagination-item';

type Props = Readonly<{
  total: number;
  pageSize: number;
  current: number;
  onItemClick: (x: number) => number;
}>;

const createArray = (total: number, pageSize: number) =>
  Array.from({ length: Math.ceil(total / pageSize) }, (_, x) => x + 1);

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
        {pages.map((item) => (
          <li className="page-item" key={item}>
            <PatinationItem
              active={item === current}
              key={item}
              onClick={() => onItemClick(item)}>
              {item}
            </PatinationItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};
