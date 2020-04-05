import React from 'react';
import { useStore } from 'effector-react';
import { $currentPage, $total, currentPageSetted } from './model';
import { Pagination as PaginationView } from '../../ui';

export const Pagination: React.FC = () => {
  const currentPage = useStore($currentPage);
  const total = useStore($total);

  return (
    <PaginationView
      currentPage={currentPage}
      total={total}
      onChange={currentPageSetted}
    />
  );
};
