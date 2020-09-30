import React from 'react';
import { useStore } from 'effector-react';
import { Pagination as PaginationUI } from 'ui';
import { model } from '../model';

export const Pagination: React.FC = () => {
  const total = useStore(model.$totalPages);
  const current = useStore(model.$currentPage);
  const pageSize = useStore(model.$pageSize);

  return (
    <PaginationUI
      current={current}
      pageSize={pageSize}
      total={total}
      onItemClick={model.currentPageWasSet}
    />
  );
};
