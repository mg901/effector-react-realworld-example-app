import React from 'react';
import { useStore } from 'effector-react';
import { itemRender } from 'library/item-render';
import { Pagination as PaginationUI } from 'ui';
import { model } from '../model';

type Props = Readonly<{
  path: string;
}>;

export const Pagination: React.FC<Props> = ({ path }) => {
  const total = useStore(model.$totalPages);
  const current = useStore(model.$currentPage);
  const pageSize = useStore(model.$pageSize);

  return (
    <PaginationUI
      current={current}
      itemRender={itemRender(path)}
      pageSize={pageSize}
      total={total}
      onChange={model.currentPageSettled}
    />
  );
};
