import React from 'react';
import { useStore } from 'effector-react';
import { PaginationProps } from 'rc-pagination';
import { Link } from 'react-router-dom';
import { Pagination as PaginationUI } from '../../../../../ui';
import { $totalPages, currentPageSetted, $currentPage } from '../model';

type ItemRender = (x: {
  path: string;
  tagName?: string;
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

export const Pagination: React.FC<Props> = (props) => {
  const total = useStore($totalPages);
  const current = useStore($currentPage);
  const { path } = props;

  return (
    <PaginationUI
      itemRender={itemRender({ path })}
      total={total}
      current={current}
      onChange={currentPageSetted}
    />
  );
};
