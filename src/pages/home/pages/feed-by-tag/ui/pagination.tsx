import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { PaginationProps } from 'rc-pagination';
import { Pagination as PaginationUI } from 'ui';
import { model } from '../model';

type ItemRender = (x: {
  path: string;
  tag: string;
}) => PaginationProps['itemRender'];

export const itemRender: ItemRender = ({ path, tag }) => (
  current,
  type,
  element,
) =>
  type !== 'page' ? (
    element
  ) : (
    <Link className="link" to={`${path}?tag=${tag}&page=${current}`}>
      {current}
    </Link>
  );

type Props = Readonly<{
  path: string;
}>;

export const Pagination: React.FC<Props> = ({ path }) => {
  const total = useStore(model.$totalPages);
  const tag = useStore(model.$currentTag);
  const current = useStore(model.$currentPage);
  const pageSize = useStore(model.$pageSize);

  return (
    <PaginationUI
      current={current}
      itemRender={itemRender({ path, tag })}
      pageSize={pageSize}
      total={total}
      onChange={model.currentPageSettled}
    />
  );
};
