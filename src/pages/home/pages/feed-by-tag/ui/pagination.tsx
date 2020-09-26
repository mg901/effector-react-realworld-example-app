import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { PaginationProps } from 'rc-pagination';
import { Pagination as PaginationUI } from 'ui';
import { model } from '../model';

type ItemRender = (x: {
  path: string;
  tagName: string;
}) => PaginationProps['itemRender'];

export const itemRender: ItemRender = ({ path, tagName }) => (
  current,
  type,
  element,
) =>
  type !== 'page' ? (
    element
  ) : (
    <Link className="link" to={`${path}?tag=${tagName}&page=${current}`}>
      {current}
    </Link>
  );

type Props = Readonly<{
  path: string;
}>;

export const Pagination: React.FC<Props> = ({ path }) => {
  const total = useStore(model.$totalPages);
  const tagName = useStore(model.$currentTag);
  const current = useStore(model.$currentPage);

  return (
    <PaginationUI
      itemRender={itemRender({ path, tagName })}
      total={total}
      current={current}
      onChange={model.currentPageSettled}
    />
  );
};
