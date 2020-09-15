import React from 'react';
import { Link } from 'react-router-dom';
import { PaginationProps } from 'rc-pagination';

type ItemRender = (path: string) => PaginationProps['itemRender'];

export const feedItemRender: ItemRender = (path) => (current, type, element) =>
  type !== 'page' ? (
    element
  ) : (
    <Link className="link" to={`${path}?page=${current}`}>
      {current}
    </Link>
  );
