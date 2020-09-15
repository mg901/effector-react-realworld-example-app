import React from 'react';
import { useStore } from 'effector-react';
import { itemRender } from '../../../../../library';
import { Pagination as PaginationUI } from '../../../../../ui';
import * as model from '../model';

type Props = Readonly<{
  path: string;
}>;

export const Pagination: React.FC<Props> = ({ path }) => {
  const total = useStore(model.$totalPages);
  const current = useStore(model.$currentPage);

  return (
    <PaginationUI
      itemRender={itemRender(path)}
      total={total}
      current={current}
      onChange={model.currentPageSetted}
    />
  );
};
