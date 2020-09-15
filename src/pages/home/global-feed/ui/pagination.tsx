import React from 'react';
import { useStore } from 'effector-react';
import { itemRender } from '../../../../library';
import { Pagination as PaginationUI } from '../../../../ui';
import { $totalPages, currentPageSetted, $currentPage } from '../model';

type Props = Readonly<{
  path: string;
}>;

export const Pagination: React.FC<Props> = ({ path }) => {
  const total = useStore($totalPages);
  const current = useStore($currentPage);

  return (
    <PaginationUI
      itemRender={itemRender(path)}
      total={total}
      current={current}
      onChange={currentPageSetted}
    />
  );
};
